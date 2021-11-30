import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { groups, setAllGroups } from './state/GroupState'
import {
  title,
  groupIdState,
  userIdState,
  isGroupState,
  setTitle,
} from './state/DisplayPaneState'
import { userList } from './state/UserState'
import endpoints from '../enpoints'
import '../component-styles/AddUsersToGroup.css'

const DisplayPane = () => {
  const displayPaneTitle = title.use()
  const isGroup = isGroupState.use()
  const groupId = groupIdState.use()
  const userId = userIdState.use()

  const allGroups = groups.use()
  const allUsers = userList.use()

  const [editMode, setEditMode] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [checkBoxes, setCheckBoxes] = useState([])
  const [currentMember, setCurrentMembers] = useState([])
  const [rerenderHelper, setRerenderHelper] = useState(false) // toggle this when want to 'force' refresh

  console.log('rerendering checkbox ' + checkBoxes)
  useEffect(() => {
    if (isGroup) {
      // get users in the group
      axios
        .get(endpoints.GET_USERS_IN_GROUP.replace(':groupId', groupId))
        .then((response) => {
          setCurrentMembers(response.data)
        })
        .catch((err) => console.log(err))
    } else {
      // get the groups the user is apart of
      axios
        .get(endpoints.GET_USERS_GROUPS.replace(':userId', userId))
        .then((response) => {
          setCurrentMembers(response.data)
        })
        .catch((err) => console.log(err))
    }
  }, [displayPaneTitle, rerenderHelper])

  const handleUsersOnChange = (index) => {
    let tempCheckBoxes = [...checkBoxes]
    tempCheckBoxes[index] = !tempCheckBoxes[index]
    setCheckBoxes(tempCheckBoxes)
  }

  const handleGroupsOnChange = (index) => {
    setSelectedGroup(index)
  }

  const getUsersAndGroups = () => {
    const newUsers = allUsers.filter((element, index) => {
      return checkBoxes[index] === true
    })
    const groupToAddTo = allGroups[selectedGroup]

    return { newUsers, groupToAddTo }
  }

  const removeUsersFromGroup = () => {
    const { newUsers, groupToAddTo } = getUsersAndGroups()

    console.log('Remove Group ' + groupToAddTo.name + ' ' + groupToAddTo.id)
    newUsers.forEach((e) => console.log(e.email + ' ' + e.id))
  }

  const assignGroupsToUsers = () => {
    // TODO need backend methods for this
  }

  const assignUsersToGroup = () => {
    const newUsers = getUsersNotInGroup().filter((element, index) => {
      return checkBoxes[index] === true
    })
    const userIds = [
      ...currentMember.map((u) => u.id),
      ...newUsers.map((u) => u.id),
    ]

    axios
      .put(endpoints.UPDATE_GROUP.replace(':groupId', groupId), {
        groupId,
        userIds: userIds,
      })
      .then((response) => {
        // update the state locally. This works most of the time. Not always
        console.log(response)
        // add the users locally
        setCurrentMembers([...currentMember, ...newUsers])
        setCheckBoxes([null])
      })
      .catch((err) => console.log(err))
  }

  function getGroupsUserNotIn() {
    const groupIdsUserIn = currentMember.map((g) => g.id)
    setCheckBoxes(Array.apply(false, allUsers.length - groupIdsUserIn.length))
    return allGroups.filter((g) => !groupIdsUserIn.includes(g.id))
  }

  function getUsersNotInGroup() {
    const usersIdsInGroup = currentMember.map((u) => u.id)
    const usersNotInGroup = allUsers.filter(
      (u) => !usersIdsInGroup.includes(u.id)
    )

    if (checkBoxes.length === 1 && checkBoxes[0] === null) {
      console.log('here')
      setCheckBoxes(Array(usersNotInGroup.length).fill(false))
    }

    return usersNotInGroup
  }

  return (
    <div
      style={{
        backgroundColor: '#e1b74d',
      }}
    >
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Done' : 'Edit'}
      </button>
      <h4>{displayPaneTitle}</h4>
      <div className='UsersAndGroups alignItems'>
        <div>
          <p>members</p>
          <ul>
            {currentMember.map((item, index) => (
              <div className='displayRow alignItems' key={index.toString()}>
                {isGroup ? <li>{item.email}</li> : <li>{item.name}</li>}
              </div>
            ))}
          </ul>
        </div>
        {editMode && (
          <div className='UsersAndGroups alignItems'>
            {isGroup ? (
              // if displaying a group, show users to add
              <div>
                {getUsersNotInGroup().map((item, index) => (
                  <div className='displayRow alignItems' key={index.toString()}>
                    <input
                      checked={checkBoxes[index] === true}
                      type='checkbox'
                      onChange={() => handleUsersOnChange(index)}
                    />
                    <h5>{item.email}</h5>
                  </div>
                ))}
              </div>
            ) : (
              // if showing a user, display groups to add
              <div>
                {getGroupsUserNotIn().map((item, index) => (
                  <div className='displayRow alignItems' key={index.toString()}>
                    <input
                      checked={checkBoxes[index] === true}
                      type='checkbox'
                      onChange={() => handleGroupsOnChange(index)}
                    />
                    <h5>{item.name}</h5>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className='addRemoveButtonContainer'>
        <button
          type='button'
          className='addRemoveButton'
          onClick={removeUsersFromGroup}
        >
          Remove Users to Group
        </button>
        <button
          type='button'
          className='addRemoveButton'
          onClick={assignUsersToGroup}
        >
          Assign Users to Group
        </button>
      </div>
    </div>
  )
}

export default DisplayPane
