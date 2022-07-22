import { useRequest } from '@@/plugin-request/request';
import { fetchResourceList } from '@/services';
import { createModel } from 'hox';

const useSource = () => {
  const { data } = useRequest<{ data: { list: API.ListItemType[] } }>(() => fetchResourceList());

  return {
    source: data?.list || [],
  };
};

export default createModel(useSource);
