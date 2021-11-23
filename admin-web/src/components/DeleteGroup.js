import React, { useState, useEffect } from 'react'
import axios from 'axios'
import endpoints from '../enpoints'
import { addGroup, groups, setAllGroups, removeGroup } from './state/GroupState'
import '../component-styles/AddUsersToGroup.css'
import TextAndButton from './helper/TextAndButton'
import '../component-styles/DeleteCreateGroup.css'
import { Autocomplete, TextField } from '@mui/material'

const AddUsersToGroup = () => {
  // const [allGroups, setAllGroups] = useState([])
  const [checkBoxes, setCheckBoxes] = useState([])
  const [selectedGroups, setSelectedGroups] = useState([])
  const [autoCompleteKey, setAutoCompleteKey] = useState(0) // to clear contents of autocomplete

  var allGroups = groups.use()

  useEffect(() => {
    axios
      .get(endpoints.GET_ALL_GROUPS)
      .then((resp) => setAllGroups(resp.data))
      .catch((err) => console.log(err))
  }, [])

  const deleteGroups = () => {
    const groupsToDelete = new Set(selectedGroups)

    allGroups
      .filter((g) => {
        return groupsToDelete.has(g.name)
      })
      .forEach((g) => {
        const groupId = g.id
        axios
          .delete(endpoints.DELETE_A_GROUP.replace(':groupId', groupId), {
            groupId: groupId,
          })
          .then((response) => {
            removeGroup(g)
            setAutoCompleteKey(autoCompleteKey + 1) // clear the autocomplete field
          })
          .catch((err) => console.log(err))
      })
  }

  function onChange(event, value, details) {
    setSelectedGroups(value)
  }

  return (
    <div>
      <h4>Delete Group(s)</h4>
      <Autocomplete
        multiple
        key={autoCompleteKey}
        id='user-select'
        options={allGroups.map((ag) => ag.name)}
        filterSelectedOptions={true}
        fullWidth={true}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label='People' />}
      />
      <button
        onClick={() => {
          deleteGroups()
        }}
      >
        Delete Groups
      </button>
    </div>
  )
}

export default AddUsersToGroup
