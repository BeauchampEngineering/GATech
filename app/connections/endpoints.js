const baseUrl = 'https://portal-manager-server.herokuapp.com/'
// const baseUrl = 'http://10.0.2.2:3000/'

export default {
  BASE_URL: baseUrl,
  AUTHENTICATE_LOGIN: baseUrl + 'auth/login',
  GET_ASSETS: baseUrl + 'api/assets',
  SEARCH_ASSETS: baseUrl + 'api/assets?search={query}',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
  STREAM: baseUrl + 'api/streams/:userID',
  GET_USERS_GROUPS: baseUrl + 'api/users/:userId/groups',
  GET_USERS_IN_GROUP: baseUrl + 'api/users/:userId/groups/:groupId/users',
  GET_GROUP_MESSAGES: baseUrl + 'api/users/:userId/groups/:groupId/messages',
}
