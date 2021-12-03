import React, { useState, useEffect } from 'react'
import { addGroup } from './state/GroupState'
import { userList } from './state/UserState'
import { Autocomplete, TextField } from '@mui/material'
import axios from 'axios'
import endpoints from '../endpoints'

const NewGroup = () => {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [groupName, setGroupName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [autoCompleteKey, setAutoCompleteKey] = useState(0) // to clear contents of autocomplete

  const users = userList.use()

  function onChange(event, value, details) {
    setErrorMessage('')
    setSelectedUsers(value)
  }

  function createGroup(groupName) {
    const newUserEmails = new Set(selectedUsers)
    const usersInGroup = users
      .filter((user) => newUserEmails.has(user.email))
      .map((user) => user.id)
    console.log('Users in Group ' + usersInGroup)

    if (groupName.trim().length === 0) {
      setErrorMessage('Please add a Group Name')
    } else if (selectedUsers.length < 2) {
      setErrorMessage('All groups need at least two users')
    } else if (groupName.trim().length > 0) {
      axios
        .post(endpoints.CREATE_NEW_GROUP, {
          name: groupName,
          userIds: usersInGroup,
        })
        .then((response) => {
          alert('Group Created Successfully')
          setGroupName('')
          setSelectedUsers([])
          setAutoCompleteKey(autoCompleteKey + 1)
          addGroup(response.data)
        })
        .catch((err) => {
          alert('Group Creation Failed')
          console.log(err)
        })
    }
  }

  return (
    <div>
      <p>Create Group</p>
      <input
        className='input'
        type='text'
        value={groupName}
        onChange={(text) => {
          setGroupName(text.target.value)
        }}
        placeholder='Group Name'
      />
      <Autocomplete
        multiple
        key={autoCompleteKey}
        id='user-select'
        options={users.map((user) => user.email)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label='People' />}
      />
      <button
        onClick={() => {
          createGroup(groupName)
        }}
      >
        Create Group
      </button>
      <p>{errorMessage}</p>
    </div>
  )
}

export default NewGroup
