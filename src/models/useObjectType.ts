import { useRequest } from '@@/plugin-request/request';
import { fetchObjectTypeList } from '@/services';
import { createModel } from 'hox';

const useObjectType = () => {
  const { data } = useRequest<{ data: { list: API.ListItemType[] } }>(() => fetchObjectTypeList());

  return {
    objectType: data?.list || [],
  };
};

export default createModel(useObjectType);
