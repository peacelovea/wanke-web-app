// 权限校验
// const OAUTH_URL = ``;
// const CLIENT_ID = '';
// const SCOPE = 'openid username email profile';

export const REDIRECT_URI = ``;
export const OAUTH_TOKEN_URL = ``;

class Oauth {
  // static login() {
  //   Oauth.removeStoreToken();
  //   window.location.href = queryString.stringifyUrl({
  //     url: `${OAUTH_URL}/auth`,
  //     query: {
  //       client_id: CLIENT_ID,
  //       response_type: 'code',
  //       redirect_uri: REDIRECT_URI,
  //       scope: SCOPE,
  //     },
  //   });
  // }
  // static logout() {
  //   Oauth.removeStoreToken();
  //   window.location.href = '';
  // }
  // static async getAccessToken(code: any) {
  //   const { data } = await axios(`/api/login?code=${code}&redirect_uri=${REDIRECT_URI}`);
  //   const { access_token } = data?.data || {};
  //   Oauth.setStoreToken(access_token);
  // }
  // static getStoreToken() {
  //   return window.localStorage.getItem('token');
  // }
  // static setStoreToken(token: string) {
  //   if (!token) return;
  //   window.localStorage.setItem('token', token);
  // }
  // static removeStoreToken() {
  //   window.localStorage.removeItem('token');
  // }
  // static isLoginPage() {
  //   return window.location.pathname === '/login';
  // }
}
export default Oauth;
