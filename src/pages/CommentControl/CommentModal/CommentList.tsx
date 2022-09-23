import { useState, useMemo, useCallback } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Header from './Header';
import Footer from './Footer';
import { getOptimalValue } from '@/scripts/utils';
import CommentFooterAction from './CommentFooterAction';
import ScrollView from './ScrollView';
import type { ParentCommentDataType, CommentType } from '../commentControl';

type PagingType = {
  total?: number;
  has_more?: boolean;
};

interface IProps {
  dataSource: ParentCommentDataType[];
  pagingParms: PagingType;
  onAction: () => void;
  onScroll: () => void;
}

function CommentList(props: IProps) {
  const { dataSource, onAction, onScroll, pagingParms } = props;
  const [length, setLength] = useState(0); // 没有特别的含义, 主要做用触发更新
  const allkeyMap = useMemo(() => dataSource.map((item) => item?.comment?.id), [dataSource]);
  const selectKey = useMemo(() => new Map(), []);
  const onSelect = useCallback(
    (e: CheckboxChangeEvent, key: string) => {
      if (e?.target?.checked) {
        selectKey.set(key, true);
        setLength(selectKey.size);
        return;
      }
      selectKey.delete(key);
      setLength(selectKey.size);
    },
    [selectKey],
  );

  const onSelectAll = useCallback(
    (e: CheckboxChangeEvent) => {
      if (e?.target?.checked) {
        allkeyMap.forEach((id: string) => {
          selectKey.set(id, true);
        });
      } else {
        selectKey.clear();
      }
      setLength(selectKey.size);
    },
    [allkeyMap, selectKey],
  );

  return (
    <>
      <Header
        num={getOptimalValue(pagingParms?.total, 0)}
        selectNum={length}
        onSelectAll={onSelectAll}
        checked={length !== 0 && length === dataSource?.length}
      />
      <ScrollView
        suffix="commentModalParent"
        onScroll={onScroll}
        dataSource={dataSource}
        height={600}
        pagingParms={pagingParms}
        getAction={(id: string, child_comment_count: number, child_comments: CommentType[]) => [
          {
            type: 'left',
            renderWithChildren: false,
            render: () => (
              <Checkbox
                key={`chcekBox-${id}`}
                checked={selectKey.get(id)}
                onChange={(e: CheckboxChangeEvent) => onSelect(e, id)}
              />
            ),
          },
          {
            type: 'foot',
            renderWithChildren: true,
            render: () => (
              <CommentFooterAction
                key={`footerAction-${id}`}
                num={child_comment_count}
                id={id}
                child_comments={child_comments}
              />
            ),
          },
        ]}
      />
      <Footer onAction={onAction} />
    </>
  );
}
export default CommentList;
