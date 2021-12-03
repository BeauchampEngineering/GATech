import React, { useState, useEffect } from 'react'
import { addGroup } from './state/GroupState'
import { userList } from './state/UserState'
import { assets as assetState } from './state/AssetState'
import { groups as groupState } from './state/GroupState'
import { Autocomplete, TextField } from '@mui/material'
import axios from 'axios'
import endpoints from '../enpoints'

const AssignGroupsToAssets = () => {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [groupName, setGroupName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [autoCompleteKey, setAutoCompleteKey] = useState(0) // to clear contents of autocomplete

  const groups = groupState.use()
  const assets = assetState.use()

  function onChange(event, value, details) {
    setErrorMessage('')
    setSelectedUsers(value)
  }

  function assignUsersToGroup() {}

  return (
    <div>
      <p>Assign Group Members to Asset</p>

      <Autocomplete
        key={autoCompleteKey}
        id='group-select'
        options={groups.map((group) => group.name)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label='Group' />}
      />
      <Autocomplete
        key={autoCompleteKey}
        id='asset-select'
        options={assets.map((asset) => asset.name)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label='Asset' />}
      />

      <button
        onClick={() => {
          assignUsersToGroup()
        }}
      >
        Assign Users to Group
      </button>
      <p>{errorMessage}</p>
    </div>
  )
}

export default AssignGroupsToAssets
