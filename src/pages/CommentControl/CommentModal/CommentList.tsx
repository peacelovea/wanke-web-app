/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useCallback, useEffect } from 'react';
import { Checkbox, Spin } from 'antd';
import { isEmpty } from 'lodash';
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
  loading: boolean;
  dataSource: ParentCommentDataType[];
  pagingParams: PagingType;
  onAction: (key: number, type: string, selectKey: Map<string, boolean>) => void;
  onScroll: () => void;
}

function CommentList(props: IProps) {
  const { dataSource, onScroll, pagingParams, loading } = props;
  const [length, setLength] = useState(0); // 没有特别的含义, 主要做用触发更新
  const allkeyMap = useMemo(() => dataSource.map((item) => item?.comment?.id), [dataSource]);
  const selectKey = useMemo(() => new Map(), [loading]);

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

  const onAction = (key: number, type: string) => {
    props.onAction(key, type, selectKey);
  };

  useEffect(() => {
    setLength(0);
  }, [loading]);

  return (
    <Spin spinning={loading} size="large" delay={500}>
      <Header
        num={getOptimalValue(pagingParams?.total, 0)}
        selectNum={length}
        onSelectAll={onSelectAll}
        // !== 0 排除刚一进入页面长度都为0的情况
        checked={!isEmpty(dataSource) && length === dataSource?.length}
      />
      <ScrollView
        suffix="commentModalParent"
        onScroll={onScroll}
        dataSource={dataSource}
        height={600}
        pagingParams={pagingParams}
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
            renderWithChildren: false,
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
    </Spin>
  );
}
export default CommentList;
