const baseUrl = 'https://portal-manager-server.herokuapp.com/'

export default {
  CREATE_NEW_USER: baseUrl + 'api/users',
  CREATE_NEW_ASSET: baseUrl + 'api/assets',
  GET_ALL_USERS: baseUrl + 'api/users',
  CREATE_NEW_GROUP: baseUrl + 'api/groups',
  GET_ALL_GROUPS: baseUrl + 'api/groups',
  DELETE_A_GROUP: baseUrl + 'api/groups/:groupId',
  ADD_SINGLE_USER_TO_GROUP: baseUrl + 'api/groups/:groupId/users',
  AUTHENTICATE_LOGIN: baseUrl + 'auth/login',
  GET_ASSETS: baseUrl + 'api/assets',
  LOGS: baseUrl + 'api/users/:userId/assets/:assetId/logs',
  GET_USERS_GROUPS: baseUrl + 'api/users/:userId/groups',
<<<<<<< Updated upstream:admin-web/src/enpoints.js
  GET_USERS_IN_GROUP: baseUrl + 'api/groups/:groupId',
  UPDATE_GROUP: baseUrl + 'api/groups/:groupId',
=======
  GET_USERS_IN_GROUP: baseUrl + 'api/users/:userId/groups/:groupId/users',
  IMPORT_SAP: baseUrl + 'sap/import',
  EXPORT_SAP: baseUrl + 'sap/export'
>>>>>>> Stashed changes:admin-web/src/endpoints.js
}
