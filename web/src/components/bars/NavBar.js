import React from 'react'
import './Navbar.css'
import { useHistory, NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

import Avatar from '@material-ui/core/Avatar'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import DropdownMenu from './DropdownMenu'

const iconSize = 'default'

const NavBar = () => {
  const history = useHistory()

  return (
    <div className='Navbar'>
      <div className='NavbarLeft'>
        <img src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png' />

        <div className='SearchFields'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='NavbarCenter'>
        <NavLink
          to='/'
          exact
          activeClassName='IconDivActive'
          className='IconDiv'
        >
          <HomeIcon fontSize={iconSize} />
        </NavLink>

        <NavLink
          to='/users'
          activeClassName='IconDivActive'
          className='IconDiv'
        >
          <GroupIcon fontSize={iconSize} />
        </NavLink>
        <NavLink
          to='/assets'
          activeClassName='IconDivActive'
          className='IconDiv'
        >
          <OndemandVideoIcon fontSize={iconSize} />
        </NavLink>
        <NavLink
          to='/groups'
          activeClassName='IconDivActive'
          className='IconDiv'
        >
          <StorefrontIcon fontSize={iconSize} />
        </NavLink>
        <NavLink
          to='/logout'
          activeClassName='IconDivActive'
          className='IconDiv'
        >
          <SupervisedUserCircleIcon fontSize={iconSize} />
        </NavLink>
      </div>

      <div className='NavbarRight'>
        <div className='UserStatus'>
          <Avatar className='Avatar' />
          <h6>Edward</h6>
        </div>

        <div className='IconButtons'>
          <AddCircleOutlineIcon />
          <MessageIcon />
          <NotificationsIcon />
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}

export default NavBar
