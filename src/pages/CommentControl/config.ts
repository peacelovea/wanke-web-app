const noop = () => {};

const kindOptions = [
  {
    label: 'ID',
    value: 'id',
  },
  {
    label: 'TOKEN',
    value: 'token',
  },
];

enum actionType {
  placedTop = 'up_comment',
  placedBottom = 'down_comment',
}

const kindFieldMap = {
  id: 'obj_id',
  token: 'obj_url_token',
};

// Search表单初始化数据
const initialValues = {
  obj_kind: 'token',
  obj_type: 'answer',
  obj_url_token: '2684537883',
};

const defaultCommentListParams = {
  limit: 10,
  order: 2,
};

export { kindOptions, initialValues, kindFieldMap, defaultCommentListParams, actionType, noop };
