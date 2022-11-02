import { useEffect } from 'react';
import queryString from 'query-string';
import oauth from '@/scripts/oauth';

export default () => {
  const { code = '', state = '' } = queryString.parse(window.location.search);
  useEffect(() => {
    async function getToken() {
      await oauth.getAccessToken(code);
      window.location.href = window.location.origin + state;
    }
    getToken();
  }, [code, state]);
  return <div>加载中 </div>;
};
