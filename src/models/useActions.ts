import { useRequest } from '@@/plugin-request/request';
import { fetchActionsList } from '@/services';

const useActions = ({ type = 'unconfigured' }: { type?: 'unconfigured' | 'all' }) => {
  const { data } = useRequest<{ data: { list: API.ListItemType[] } }>(
    () => fetchActionsList({ query_type: type }),
    { manual: false },
  );

  return {
    actions: data?.list || [],
  };
};

export default useActions;
