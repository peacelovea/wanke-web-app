export type AuthorType = {
  avatar_path: string;
  avatar_token: string;
  description: string;
  email: string;
  full_name: string;
};

export type DetailType = {
  author: AuthorType;
  author_id: number | string;
  content: string;
  created_at: number | string;
  object_id: number | string;
  object_type: string;
  title: string;
  updated_at: number | string;
  url: string;
  url_token: string;
};

export type ObjectTypes = {
  data: DetailType;
};

export type SelectKeyType = {
  key: string;
};

export type SearchDataType = {
  kind: string;
  content: string;
  obj: string;
};

export type CommentAuthorType = {
  id: string;
  fullname: string;
  avatar_url: string;
  headline: string;
  created_at: number;
  email: string;
  phone: string;
  url: string;
  is_org: boolean;
};

export type CommentType = {
  id: string;
  content: string;
  created_at: number;
  likes: number;
  url: string;
  url_token: string;
  child_comment_count?: number;
  author: CommentAuthorType;
  featured: boolean;
  reply_member?: CommentAuthorType;
  has_more?: boolean;
  ip_info?: any;
  top?: boolean;
  is_parent_author?: boolean;
  is_author_top?: boolean;
};

export type ParentCommentDataType = {
  child_comments: CommentType[];
  comment: CommentType;
  child_comment_count: number;
  reply_member?: number;
};

export type ParentCommentType = {
  data: ParentCommentDataType[];
  total: number;
};
