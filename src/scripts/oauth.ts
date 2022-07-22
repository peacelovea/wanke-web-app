import queryString from 'query-string';
// @ts-ignore
import { request } from 'umi';

const { protocol, origin, host, pathname, search } = window.location;
const LOGOUT_URL = `${protocol}//sso.in.zhihu.com/logout?next=${origin}`;
const OAUTH_URL = `${protocol}//sso.in.zhihu.com/api/app/oauth`;
const CLIENTID = 'ruban';
const RESPONENTCODE = 'code';
const SCOPE = 'all';
const STATE = pathname + search;
export const REDIRECTURI = `${protocol}//${host}/login`;
export const OAUTH_TOKEN_URL = `${OAUTH_URL}/token`;

class Oauth {
  static login() {
    Oauth.removeStoreToken();
    window.location.href = queryString.stringifyUrl({
      url: `${OAUTH_URL}/authorize`,
      query: {
        client_id: CLIENTID,
        response_type: RESPONENTCODE,
        redirect_uri: REDIRECTURI,
        scope: SCOPE,
        state: STATE,
      },
    });
  }
  static logout() {
    Oauth.removeStoreToken();
    window.location.href = LOGOUT_URL;
  }
  static async getAccessToken(code: any) {
    const url = queryString.stringifyUrl({
      url: OAUTH_TOKEN_URL,
      query: {
        code,
        grant_type: 'authorization_code',
      },
    });
    const { access_token } = await request(url, {
      method: 'POST',
      requestType: 'form',
    });
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
