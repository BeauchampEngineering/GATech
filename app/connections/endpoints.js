const baseUrl = 'https://portal-manager-server.herokuapp.com/'
// const baseUrl = 'http://10.0.2.2:3000/'

export default {
  GET_ASSETS: baseUrl + 'api/assets',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
}
