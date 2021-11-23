import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { groups, setAllGroups } from './state/GroupState'
import {
  title,
  groupIdState,
  userIdState,
  isGroupState,
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

  useEffect(() => {
    console.log('use effect isGroup ' + isGroup)
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
          console.log(response.data)
        })
        .catch((err) => console.log(err))
    }
  }, [displayPaneTitle])

  console.log('current Members ' + currentMember)

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

  const assignUsersToGroup = () => {
    const { newUsers, groupToAddTo } = getUsersAndGroups()

    console.log('Add Group ' + groupToAddTo.name + ' ' + groupToAddTo.id)
    let allSuccessful = true
    newUsers.forEach((e) => {
      console.log(e.email + ' ' + e.id)
      const addSingleUserEndpoint = endpoints.ADD_SINGLE_USER_TO_GROUP.replace(
        ':groupId',
        groupToAddTo.id
      )

      console.log(addSingleUserEndpoint)
      axios
        .post(addSingleUserEndpoint, {
          userId: e.id.toString(),
        })
        .catch((err) => {
          console.log(err)
          allSuccessful = false
        })
    })
  }

  return (
    <div
      style={{
        backgroundColor: '#e1b74d',
      }}
    >
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
        <div className='UsersAndGroups alignItems'>
          {isGroup ? (
            // if displaying a group, show users to add
            <div>
              {allUsers.map((item, index) => (
                <div className='displayRow alignItems' key={index.toString()}>
                  <input
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
              {allGroups.map((item, index) => (
                <div className='displayRow alignItems' key={index.toString()}>
                  <input
                    type='checkbox'
                    onChange={() => handleGroupsOnChange(index)}
                  />
                  <h5>{item.name}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
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
