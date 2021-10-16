const baseUrl = 'https://portal-manager-server.herokuapp.com/'

export default {
  CREATE_NEW_USER: baseUrl + 'api/users',
  AUTHENTICATE_LOGIN: baseUrl + 'auth/login',
  GET_ASSETS: baseUrl + 'api/assets',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
  GET_USERS_GROUPS: baseUrl + 'api/users/:userId/groups',
  GET_USERS_IN_GROUP: baseUrl + 'api/users/:userId/groups/:groupId/users',
}
