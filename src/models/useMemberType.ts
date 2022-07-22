import { useRequest } from '@@/plugin-request/request';
import { fetchMemberTypeList } from '@/services';
import { createModel } from 'hox';

const useMemberType = () => {
  const { data } = useRequest<{ data: { list: API.ListItemType[] } }>(fetchMemberTypeList);

  return {
    memberType: data?.list || [],
  };
};

export default createModel(useMemberType);
