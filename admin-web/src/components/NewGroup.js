import React, { useState } from 'react'
import { useAutocomplete } from '@mui/material/useAutocomplete'
import { Autocomplete, TextField } from '@mui/material'

const NewGroup = () => {
  const [selectedItems, setSelectedItems] = useState([])
  const [groupName, setGroupName] = useState('')
  const data = ['Edward', 'Aarun', 'Slacker']

  function onChange({ value }) {
    setSelectedItems(value)
  }

  function createGroup(name) {
    console.log('TODO: create group')
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
        id='combo-box-demo'
        options={data}
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
    </div>
  )
}

export default NewGroup
