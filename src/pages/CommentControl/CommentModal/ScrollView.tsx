import { useMemo } from 'react';
import { Skeleton, Divider, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getOptimalValue } from '@/scripts/utils';
import HtmlContent from '@/components/HtmlContent';
import CommentItem from '@/components/CommentItem';
import { formateDataSource, formateInfo } from './utils';
import type { CommentType, ParentCommentDataType } from '../commentControl';
import Title from './Title';
import styles from './index.less';

interface IProps {
  suffix: string | number;
  isSub?: true;
  height: number;
  pagingParams: any;
  dataSource: CommentType[] | ParentCommentDataType[];
  onScroll: () => void;
  getAction: (id: string, child_comment_count: number, child_comments: CommentType[]) => any[];
}

function ScrollView(props: IProps) {
  const { onScroll, suffix, dataSource: data, getAction, height, isSub, pagingParams } = props;
  const domId = useMemo(() => `scroll-view-${suffix}`, [suffix]);
  const dataSource = useMemo(() => formateDataSource(data, isSub), [data, isSub]);

  return (
    <div id={domId} className={styles.listScrollView} style={{ maxHeight: height }}>
      <InfiniteScroll
        dataLength={dataSource?.length}
        next={onScroll}
        hasMore={pagingParams?.has_more}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>到底啦 🤐</Divider>}
        scrollableTarget={domId}
      >
        <List
          split
          dataSource={dataSource}
          renderItem={(item: ParentCommentDataType) => {
            const {
              comment: { id, author, content, likes, reply_member, is_parent_author },
              child_comment_count,
              child_comments = [],
            } = item;
            const info = formateInfo(item?.comment);
            return (
              <List.Item key={id}>
                <CommentItem
                  commentData={{
                    author: (
                      <Title
                        avatar={getOptimalValue(author?.fullname)}
                        reply_member={reply_member?.fullname}
                        is_parent_author={is_parent_author}
                      />
                    ),
                    avatar: author?.avatar_url,
                    content: HtmlContent(content),
                    childCommentCount: child_comment_count,
                    likes,
                    info,
                    className: styles.commentItem,
                  }}
                  actions={getAction(id, child_comment_count, child_comments)}
                />
              </List.Item>
            );
          }}
        />
      </InfiniteScroll>
    </div>
  );
}

export default ScrollView;
