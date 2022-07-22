import oauth from '@/scripts/oauth';
import { message } from 'antd';
import { request } from './init/request';
import { layout } from './layouts';
import { fetchResource, fetchUserInfo } from '@/services';

async function getInitialState() {
  if (oauth.isLoginPage()) {
    return {};
  }
  const { data: userInfo } = await fetchUserInfo();
  const { data: resource } = await fetchResource();

  return {
    userInfo,
    resource: resource?.resource || {},
  };
}

message.config({
  top: 40,
});

export { request, getInitialState, layout };
