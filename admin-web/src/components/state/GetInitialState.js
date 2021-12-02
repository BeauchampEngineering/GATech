import axios from 'axios'
import endpoints from '../../enpoints'
import { setAllGroups } from './GroupState'
import { setAllUsers } from './UserState'

export const saveUsersToState = () => {
  const getAllUsersEndPoint = endpoints.GET_ALL_USERS
  axios
    .get(getAllUsersEndPoint)
    .then((response) => {
      setAllUsers(response.data)
    })
    .catch((err) => console.log(err))
}

export const saveGroupsToState = () => {
  axios
    .get(endpoints.GET_ALL_GROUPS)
    .then((resp) => setAllGroups(resp.data))
    .catch((err) => console.log(err))
}
