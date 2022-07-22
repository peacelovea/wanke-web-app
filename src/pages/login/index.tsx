import oauth from '@/scripts/oauth';
import PageLoading from '@ant-design/pro-layout/es/PageLoading';
import queryString from 'query-string';
import { useEffect } from 'react';

export default () => {
  const { code = '', state } = queryString.parse(window.location.search);
  useEffect(() => {
    async function getToken() {
      await oauth.getAccessToken(code);
      window.location.href = window.location.origin + state;
    }
    getToken();
  }, [code, state]);
  return <PageLoading />;
};
