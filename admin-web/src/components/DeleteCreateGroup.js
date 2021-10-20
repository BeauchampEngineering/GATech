import React, { useState } from 'react'
import '../component-styles/AddUsersToGroup.css'
import TextAndButton from './helper/TextAndButton'
import '../component-styles/DeleteCreateGroup.css'

const AddUsersToGroup = () => {
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

  const createGroup = (groupName) => {
    console.log('creating group with name ' + groupName)
  }

  const handleGroupsOnChange = (index) => {
    let tempCheckBoxes = [...checkBoxes]
    tempCheckBoxes[index] = !tempCheckBoxes[index]
    setCheckBoxes(tempCheckBoxes)
  }

  const deleteGroups = () => {
    const groupsToDelete = allGroups.filter((element, index) => {
      return checkBoxes[index] === true
    })

    groupsToDelete.forEach((e) =>
      console.log('todo: remove ' + e.name + ' ' + e.id)
    )
  }

  return (
    <div>
      <h4>Delete/Create New Group(s)</h4>
      <div className='deleteOrCreateGroups'>
        <div className='groups'>
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
          <button onClick={deleteGroups}>Delete Groups</button>
        </div>
        <div>
          <TextAndButton
            title='Create New Group'
            placeholder='New Group Name'
            buttonText='Create Group'
            onClick={createGroup}
          />
        </div>
      </div>
    </div>
  )
}

export default AddUsersToGroup
