import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { Like } from 'zhihu-icons';

interface TypeString {
  text: ReactNode;
  type?: 'tag' | 'hot' | 'text';
}

export interface ActionItem {
  type: 'foot' | 'left' | 'right';
  renderWithChildren: boolean;
  render: (data: CommentData) => JSX.Element;
}

export interface CommentData {
  author?: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
  content: React.ReactNode;
  likes?: number;
  authorTag?: TypeString[];
  info?: TypeString[];
  childrenData?: CommentData[];
  childCommentCount?: number;
}

const CommentItem: React.FC<{ commentData: CommentData; actions?: ActionItem[] }> = ({
  commentData,
  actions,
}) => {
  const { author, avatar, className, content, likes, info, childrenData, authorTag } = commentData;

  const { footAction, rightAction, leftAction, withChildrenActions } = useMemo(() => {
    function getAction(type: ActionItem['type']) {
      return (
        actions?.filter((item) => item.type === type).map((item) => item.render(commentData)) ||
        null
      );
    }

    function getWithChildrenActions() {
      return actions?.filter((item) => item.renderWithChildren);
    }

    return {
      footAction: getAction('foot'),
      rightAction: getAction('right'),
      leftAction: getAction('left'),
      withChildrenActions: getWithChildrenActions(),
    };
  }, [actions]);

  const authorTagDom = authorTag ? (
    <>
      {authorTag.map((item, index) => (
        <span key={`author_${index}`} className={item.type ? styles[`comment_${item.type}`] : ''}>
          {item.text}
        </span>
      ))}
    </>
  ) : null;

  const authorContent = author ? (
    <div className={styles.comment_item_title}>
      {author}
      {authorTagDom}
    </div>
  ) : null;

  const avatarDom = avatar ? (
    <div className={styles.img_box}>
      {typeof avatar === 'string' ? <img src={avatar} alt="comment-avatar" /> : avatar}
    </div>
  ) : null;

  const contentDom = content ? <div className={styles.comment_item_content}>{content}</div> : null;

  const baseInfoDom = info ? (
    <div className={styles.comment_base_info}>
      {info.map((infoItem, index) => {
        const { type, text } = infoItem;
        return (
          <span key={`baseInfo_${index}`} className={type ? styles[`comment_${type}`] : ''}>
            {text}
            {index + 1 !== info.length ? ' · ' : ''}
          </span>
        );
      })}
    </div>
  ) : null;

  const likesDom = likes ? (
    <div className={styles.comment_like}>
      <Like size={17} center={true} />
      <span>{likes}</span>
    </div>
  ) : null;

  const childrenDom = childrenData?.length ? (
    <div className={styles.comment_item_children}>
      {childrenData?.map((item, index) => (
        <CommentItem key={`childre_${index}`} actions={withChildrenActions} commentData={item} />
      ))}
    </div>
  ) : null;

  const cls = classNames(styles.comment_list_item_box, className);

  return (
    <div className={cls}>
      <div>{leftAction}</div>
      <div className={styles.comment_box}>
        <div className={styles.comment_item}>
          <div className={styles.comment_item_left}>{avatarDom}</div>
          <div className={styles.comment_item_right}>
            {authorContent}
            {contentDom}
            <div className={styles.comment_item_info}>
              {baseInfoDom}
              {likesDom}
            </div>
          </div>
          <div>{rightAction}</div>
        </div>
        {childrenDom}
        {footAction}
      </div>
    </div>
  );
};

export default CommentItem;
