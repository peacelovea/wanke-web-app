import { getAccessButtonFromResources, getAccessRoutesFromResources } from '@/scripts/utils';

interface InitialStateType {
  resource: API.Resource[];
}

function access(initialState: InitialStateType) {
  const { resource = [] } = initialState || {};

  const accessRoutes = getAccessRoutesFromResources(resource);
  const accessButtons = getAccessButtonFromResources(resource);
  return {
    // 路由权限
    accessRouteFilter: ({ path }: { path: string }) => accessRoutes.includes(path),
    // 资源权限
    accessButtonFilter: (id: string) => accessButtons.includes(id),
    // 角色权限
    accessExtraFilter: (key: string, accessList: string[] = []) => accessList.includes(key), // 用于除 uac 额外的权限判断，需要自己传递 key & list
  };
}

export default access;
