import type { ParentCommentDataType, CommentType } from '../commentControl';
import { formatTime } from '@/scripts/utils';

type InfoType = {
  text: string;
  type: 'text' | 'tag' | 'hot' | undefined;
};

export function formateDataSource(
  data: ParentCommentDataType[] | CommentType[],
  isSub: true | undefined,
): any[] {
  if (isSub) {
    return data.map((item) => ({
      child_comment_count: 0,
      child_comments: [],
      comment: item,
    }));
  }
  return data;
}

export function setInfo(infoArr: InfoType[], val: any, text: string, type: any) {
  if (val) {
    infoArr.push({
      text,
      type,
    });
  }
}

export function formateInfo(comment: CommentType | undefined) {
  const {
    ip_info: { text },
    featured,
    top,
    created_at,
  } = comment || {};
  const infoArr: InfoType[] = [];
  setInfo(infoArr, created_at, formatTime(created_at), 'text');
  setInfo(infoArr, text, text, 'text');
  setInfo(infoArr, featured, '热', 'hot');
  setInfo(infoArr, top, '官方置顶', 'tag');
  return infoArr;
}
