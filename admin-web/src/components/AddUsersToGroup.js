import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endpoints from '../enpoints'
import '../component-styles/AddUsersToGroup.css'

const AddUsersToGroup = () => {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [allUsers, setallUsers] = useState([])
  const [allGroups, setAllGroups] = useState([
    {
      id: 1,
      name: 'Early shift',
      updatedAt: '2021-10-19T20:47:04.756Z',
      createdAt: '2021-10-19T20:47:04.756Z',
    },
    {
      id: 2,
      name: 'Middle Shift',
      updatedAt: '2021-10-19T20:47:04.756Z',
      createdAt: '2021-10-19T20:47:04.756Z',
    },
  ])
  const [checkBoxes, setCheckBoxes] = useState([])

  useEffect(() => {
    const getAllUsersEndPoint = endpoints.GET_ALL_USERS
    axios
      .get(getAllUsersEndPoint)
      .then((response) => {
        console.log(response)
        setallUsers(response.data)
        setCheckBoxes(new Array(response.data.length).fill(false))
      })
      .catch((err) => console.log(err))
  }, [])

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
    newUsers.forEach((e) => console.log(e.email + ' ' + e.id))
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
