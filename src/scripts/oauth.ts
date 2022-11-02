import queryString from 'query-string';
import axios from 'axios';

const { protocol, host } = window.location;
const OAUTH_URL = `https://staff.zhihu.com/oidc`;
const CLIENT_ID = '62fb75ff010cb09d42fbf794';
const SCOPE = 'openid username email profile';

export const REDIRECT_URI = `${protocol}//${host}/login`;
export const OAUTH_TOKEN_URL = `${OAUTH_URL}/token`;

class Oauth {
  static login() {
    Oauth.removeStoreToken();
    window.location.href = queryString.stringifyUrl({
      url: `${OAUTH_URL}/auth`,
      query: {
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: SCOPE,
      },
    });
  }
  static logout() {
    Oauth.removeStoreToken();
    window.location.href = '';
  }
  static async getAccessToken(code: any) {
    const { data } = await axios(`/api/login?code=${code}&redirect_uri=${REDIRECT_URI}`);
    const { access_token } = data?.data || {};

    Oauth.setStoreToken(access_token);
  }
  static getStoreToken() {
    return window.localStorage.getItem('token');
  }
  static setStoreToken(token: string) {
    if (!token) return;
    window.localStorage.setItem('token', token);
  }
  static removeStoreToken() {
    window.localStorage.removeItem('token');
  }
  static isLoginPage() {
    return window.location.pathname === '/login';
  }
}
export default Oauth;
