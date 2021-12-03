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
    return data.map((d) => (
      <p
        className='itemList'
        key={isGroup ? d.id : d.userId}
        onClick={() => setDisplayPane(d, isGroup)}
      >
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
    <div>
      <p>View Details</p>
      <div id='viewAllContainer'>
        <div id='groupsContainer'>
          {showAllGroups && getListComponent(allGroups, true)}
          <p
            className='viewAll'
            onClick={() => setShowAllGroups(!showAllGroups)}
          >
            View All Groups
          </p>
        </div>

        <div id='usersContainer'>
          {showAllUsers && getListComponent(allUsers, false)}
          <p className='viewAll' onClick={() => setShowAllUsers(!showAllUsers)}>
            View All Users
          </p>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
