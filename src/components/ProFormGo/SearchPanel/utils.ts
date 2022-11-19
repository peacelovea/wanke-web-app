import { pick } from 'lodash';
import type { BasicFormItem } from '@/components/ProFormGo/FormTool/interface';

export const getFormattedParamsFormUrl = (
  urlParams: Record<string, string | number>,
  settings: BasicFormItem[],
) => {
  const keys = settings.map(({ name }) => name);
  // @ts-ignore
  const params = pick(urlParams, keys);

  return Object.entries(params).reduce((a: any, [k, v]) => {
    const { syncToQuery } = settings?.find(({ name }) => name === k) || {};
    return {
      ...a,
      [k]: typeof syncToQuery === 'function' ? syncToQuery(v, urlParams) : v,
    };
  }, {});
};
