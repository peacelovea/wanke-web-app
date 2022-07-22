import { useRequest } from '@@/plugin-request/request';
import { fetchTemplateList } from '@/services';
import { createModel } from 'hox';

const useTemplates = () => {
  const { data } = useRequest<{ data: { list: any[] } }>(() => fetchTemplateList());

  return {
    templates: data?.list || [],
  };
};

export default createModel(useTemplates);
