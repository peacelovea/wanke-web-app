import React, { useState, useCallback } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { fetchMoreComments } from '@/services/commentControl';
import ScrollView from './ScrollView';
import usePaging from './usePaging';
import { defaultCommentListParams } from '../config';
import CommentItem from '@/components/CommentItem';
import { formateDataSource } from './utils';
import type { CommentType } from '../commentControl';
import { getOptimalValue } from '@/scripts/utils';
import HtmlContent from '@/components/HtmlContent';
import styles from './index.less';

interface IProps {
  num: number;
  id: string;
  child_comments: CommentType[];
}

function CommentFooterAction(props: IProps) {
  const { id, num, child_comments = [] } = props;
  const [visible, setVisible] = useState(false);
  const { loading, offset, dataSource, run, pagingParms } = usePaging(
    fetchMoreComments,
    defaultCommentListParams.limit,
  );
  const onScroll = () => {
    if (!loading) {
      run({
        offset,
        root_comment_id: id,
        limit: defaultCommentListParams.limit,
      });
    }
  };

  const onCheck = useCallback(() => {
    setVisible(true);
    onScroll();
  }, []);

  if (num <= 0) {
    return null;
  }
  const child = formateDataSource(child_comments, true);
  return (
    <>
      <div className={styles.childCommentListStyle}>
        {child.length && !visible
          ? child.map(({ comment }) => {
              const { author, content, id } = comment;
              return (
                <CommentItem
                  key={id}
                  commentData={{
                    author: getOptimalValue(author?.fullname),
                    avatar: author?.avatar_url,
                    content: HtmlContent(content),
                    className: styles.commentItem,
                  }}
                />
              );
            })
          : null}
        {visible ? (
          <ScrollView
            isSub
            suffix={`subCommentList-${id}`}
            height={400}
            dataSource={dataSource}
            pagingParms={pagingParms}
            onScroll={onScroll}
            getAction={() => []}
          />
        ) : null}
      </div>
      {num > 2 && !visible ? (
        <div onClick={onCheck} className={styles.footerActionContainer}>
          {`查看全部 ${num} 条评论`} <RightOutlined />
        </div>
      ) : null}
    </>
  );
}

export default React.memo(CommentFooterAction);
