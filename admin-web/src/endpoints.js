const baseUrl = 'https://portal-manager-server.herokuapp.com/'

export default {
  BASE_URL: baseUrl,
  CREATE_NEW_USER: baseUrl + 'api/users',
  CREATE_NEW_ASSET: baseUrl + 'api/assets',
  GET_ALL_USERS: baseUrl + 'api/users',
  CREATE_NEW_GROUP: baseUrl + 'api/groups',
  GET_ALL_GROUPS: baseUrl + 'api/groups',
  DELETE_A_GROUP: baseUrl + 'api/groups/:groupId',
  ADD_SINGLE_USER_TO_GROUP: baseUrl + 'api/groups/:groupId/users',
  ASSIGN_USER_TO_ASSET: baseUrl + 'api/users/:userId/assets',
  AUTHENTICATE_LOGIN: baseUrl + 'auth/login',
  GET_ASSETS: baseUrl + 'api/assets',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
  GET_USERS_GROUPS: baseUrl + 'api/users/:userId/groups',
  GET_USERS_IN_GROUP: baseUrl + 'api/groups/:groupId',
  UPDATE_GROUP: baseUrl + 'api/groups/:groupId',
  IMPORT_SAP: baseUrl + 'sap/import',
  EXPORT_SAP: baseUrl + 'sap/export',
}
