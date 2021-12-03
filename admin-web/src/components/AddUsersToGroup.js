import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { groups, setAllGroups } from './state/GroupState'
import { userList } from './state/UserState'
import endpoints from '../endpoints'
import '../component-styles/AddUsersToGroup.css'

const AddUsersToGroup = () => {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [checkBoxes, setCheckBoxes] = useState([])

  const allGroups = groups.use()
  const allUsers = userList.use()

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
    <div>
      <h4>Add/Remove Users to Group</h4>
      <div className='UsersAndGroups alignItems'>
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
        <div>
          {allGroups.map((item, index) => (
            <div className='displayRow alignItems' key={index.toString()}>
              <input
                type='radio'
                checked={selectedGroup === index}
                onChange={() => handleGroupsOnChange(index)}
              />
              <h5>{item.name}</h5>
            </div>
          ))}
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

export default AddUsersToGroup
