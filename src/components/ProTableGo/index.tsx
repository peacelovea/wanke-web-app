import React, { useRef } from 'react';
import { useLocation } from 'umi';
import { omit } from 'lodash';
import type { ProTableGoProps } from '@ant-pro-go/table';
import ProTable from '@ant-pro-go/table';

function ProTableGo({
  actionRef,
  manualRequest,
  options,
  scroll,
  form,
  onSubmit,
  request,
  ...rawProps
}: ProTableGoProps) {
  const loc: any = useLocation();
  const forceRequestRef = useRef(false); // 需强制执行请求标志

  // fix: 当 column 配置了 initialValue 时， history.back 后 location 里的 query 不会生效的问题
  const getFormattedLocQuery = () => {
    const { columns } = rawProps;
    const { query } = loc || {};

    if (!form?.initialValues || !columns || !query) return {};

    const formattedQuery = Object.entries(query).reduce((a: any, [k, v]: any) => {
      const { searcher } = columns.find(({ dataIndex }) => dataIndex === k) || {};
      const { syncQuery } = searcher || {};
      const val = typeof syncQuery === 'object' && syncQuery.toState ? syncQuery.toState(v) : v;

      return {
        ...a,
        [k]: val,
      };
    }, {});

    return formattedQuery;
  };

  const requestTable = (params: any, sort: any, filter: any) => {
    if (!manualRequest)
      return request?.(params, sort, filter) ?? Promise.resolve({ data: [], success: true });

    const omitParams = omit(params, ['current', 'pageSize']);
    if (!forceRequestRef.current && !Object.keys(omitParams)?.length)
      return Promise.resolve({ data: [], success: true });

    if (forceRequestRef.current) forceRequestRef.current = false;

    return request?.(params, sort, filter) ?? Promise.resolve({ data: [], success: true });
  };

  const handleSubmit = (params: any) => {
    forceRequestRef.current = true;
    onSubmit?.(params);
  };

  const onChange = () => {
    if (manualRequest) forceRequestRef.current = true;
  };

  return (
    <>
      <ProTable
        request={requestTable}
        actionRef={actionRef}
        onSubmit={handleSubmit}
        scroll={{ x: 'max-content', ...scroll }}
        options={{
          setting: false,
          reload: () => {
            forceRequestRef.current = true;
            // @ts-ignore
            actionRef?.current?.reload();
          },
          ...options,
        }}
        form={{
          ...form,
          initialValues: {
            ...form?.initialValues,
            ...getFormattedLocQuery(),
          },
        }}
        onChange={onChange}
        {...rawProps}
      />
    </>
  );
}

export default ProTableGo;
