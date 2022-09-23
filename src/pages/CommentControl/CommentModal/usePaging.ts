import { useState } from 'react';
import { useRequest } from 'ahooks';

function usePaging(fetchFunc: (params?: any) => void, limit: number) {
  const [offset, setOffset] = useState<number>(0);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [pagingParms, setpPagingParms] = useState({
    total: 0,
    has_more: false,
  });
  const { run, loading } = useRequest(fetchFunc, {
    manual: true,
    onSuccess: ({ data, ...rest }) => {
      setDataSource([...dataSource, ...data]);
      setOffset((offset) => offset + limit);
      setpPagingParms(rest);
    },
  });
  return {
    dataSource,
    loading,
    offset,
    pagingParms,
    run,
  };
}
export default usePaging;
