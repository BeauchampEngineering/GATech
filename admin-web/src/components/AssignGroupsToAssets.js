import React, { useState, useEffect } from 'react'
import { addGroup } from './state/GroupState'
import { userList } from './state/UserState'
import { assets as assetState } from './state/AssetState'
import { groups as groupState } from './state/GroupState'
import { Autocomplete, TextField } from '@mui/material'
import axios from 'axios'
import endpoints from '../enpoints'

const AssignGroupsToAssets = () => {
  const [selectedAsset, setSelectedAsset] = useState({})
  const [selectedGroup, setSelectedGroup] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [autoCompleteKey, setAutoCompleteKey] = useState(0) // to clear contents of autocomplete

  const groups = groupState.use()
  const assets = assetState.use()

  function groupSelected(event, value, details) {
    setSelectedGroup(value)
  }

  function assetSelected(event, value, details) {
    setSelectedAsset(value)
  }

  function assignUsersToGroup() {
    // this is grossly ineffiecient

    //find the asset
    const assetId = assets.filter((a) => a.name === selectedAsset)[0].id

    // find the group
    const groupObject = groups.filter((g) => g.name === selectedGroup)

    const errorCount = 0
    // assign each user to the the asset in question
    groupObject[0].users.forEach((u) => {
      axios
        .post(endpoints.ASSIGN_USER_TO_ASSET.replace(':userId', u.id), {
          assetId: assetId,
        })
        .catch((err) => {
          errorCount += 1
          alert('Failed')
          console.log('adding user err ' + err)
        })
    })

    if (errorCount === 0) {
      alert('Success')
    }
  }

  return (
    <div>
      <p>Assign Group Members to Asset</p>

      <Autocomplete
        key={autoCompleteKey}
        id='group-select'
        options={groups.map((group) => group.name)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={groupSelected}
        renderInput={(params) => <TextField {...params} label='Group' />}
      />
      <Autocomplete
        key={autoCompleteKey}
        id='asset-select'
        options={assets.map((asset) => asset.name)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={assetSelected}
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
