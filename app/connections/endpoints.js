const baseUrl = 'https://portal-manager-server.herokuapp.com/'
// const baseUrl = 'http://10.0.2.2:3000/'

export default {
  AUTHENTICATE_LOGIN: baseUrl + 'auth/login',
  GET_ASSETS: baseUrl + 'api/assets',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
  GET_USERS_GROUPS: baseUrl + 'api/users/:userId/groups',
}
