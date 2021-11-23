import React, { useState } from 'react'
import '../component-styles/ViewAll.css'

import { groups } from './state/GroupState'
import { userList } from './state/UserState'
import { setDisplayGroup, setDisplayUser } from './state/DisplayPaneState'

const ViewAll = () => {
  const [showAllGroups, setShowAllGroups] = useState(false)
  const [showAllUsers, setShowAllUsers] = useState(false)

  const allGroups = groups.use()
  const allUsers = userList.use()

  function getListComponent(data, isGroup) {
    console.log('data is ' + JSON.stringify(data, null, 4))

    return data.map((d) => (
      <p className='itemList' onClick={() => setDisplayPane(d, isGroup)}>
        {isGroup ? d.name : d.email}
      </p>
    ))
  }

  function setDisplayPane(data, isGroup) {
    if (isGroup) {
      setDisplayGroup(data)
    } else {
      setDisplayUser(data)
    }
  }

  return (
    <div id='viewAllContainer'>
      <div id='groupsContainer'>
        <p className='viewAll' onClick={() => setShowAllGroups(!showAllGroups)}>
          View All Groups
        </p>
        {showAllGroups && getListComponent(allGroups, true)}
      </div>

      <div id='usersContainer'>
        <p className='viewAll' onClick={() => setShowAllUsers(!showAllUsers)}>
          View All Users
        </p>
        {showAllUsers && getListComponent(allUsers, false)}
      </div>
    </div>
  )
}

export default ViewAll
