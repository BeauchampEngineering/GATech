import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      {'  '}
      <Link to='/users'>Users</Link>
      {'  '}
      <Link to='/assets'>Assets</Link>
      {'  '}
      <Link to='/groups'>Groups</Link>
      {'  '}
      <Link to='/logout'>Logout</Link>
    </div>
  )
}

export default NavBar
