import type { ParentCommentDataType, CommentType } from '../commentControl';

export function formateDataSource(
  data: ParentCommentDataType[] | CommentType[],
  isSub: true | undefined,
): any[] {
  if (isSub) {
    return data.map((item) => ({
      child_comment_count: 0,
      child_comments: [],
      comment: {
        ...item,
        author: item.reply_member,
      },
    }));
  }
  return data;
}
