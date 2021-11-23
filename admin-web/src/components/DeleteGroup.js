import React, { useState, useEffect } from 'react'
import axios from 'axios'
import endpoints from '../enpoints'
import '../component-styles/AddUsersToGroup.css'
import TextAndButton from './helper/TextAndButton'
import '../component-styles/DeleteCreateGroup.css'

const AddUsersToGroup = () => {
  const [allGroups, setAllGroups] = useState([])
  const [checkBoxes, setCheckBoxes] = useState([])

  useEffect(() => {
    axios
      .get(endpoints.GET_ALL_GROUPS)
      .then((resp) => setAllGroups(resp.data))
      .catch((err) => console.log(err))
  }, [])

  const createGroup = (groupName) => {
    console.log('creating group with name ' + groupName)
    axios
      .post(endpoints.CREATE_NEW_GROUP, {
        name: groupName,
        userIds: [],
      })
      .then((resp) => {
        console.log('Group created')
        setAllGroups([...allGroups, resp.data])
      })
      .catch((err) => console.log(err))
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

    groupsToDelete.forEach((e) => {
      console.log('todo: remove ' + e.name + ' ' + e.id)
      axios
        .delete(endpoints.DELETE_A_GROUP.replace(':groupId', e.id))
        .then((response) => {
          console.log('deleted group ' + e.id)

          setAllGroups(
            allGroups.filter((g) => {
              return g.id !== e.id
            })
          )
        })
        .catch((err) => console.log(err))
    })
  }

  return (
    <div>
      <h4>Delete Group(s)</h4>
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
      </div>
    </div>
  )
}

export default AddUsersToGroup
