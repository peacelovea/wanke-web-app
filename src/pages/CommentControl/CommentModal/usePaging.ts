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
    onSuccess: ({ data, ...rest }, [, isRefresh = false]) => {
      setDataSource(isRefresh ? [...data] : [...dataSource, ...data]);
      setOffset((offset) => offset + limit);
      setpPagingParms(rest);
    },
  });

  const onRefresh = (params: any) => {
    setOffset(0);
    // @ts-ignore
    run({ ...params, offset: 0 }, true);
  };

  return {
    dataSource,
    loading,
    offset,
    pagingParms,
    setOffset,
    onRefresh,
    run,
  };
}
export default usePaging;
