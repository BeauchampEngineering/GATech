import './DropdownMenu.css'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Avatar from '@material-ui/core/Avatar'

const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(null)
  const dropdownRef = useRef(null)
  const onClick = () => setIsActive(!isActive)

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e)
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive)
      }
    }

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])

  return (
    <div className='MenuContainer'>
      <button onClick={onClick} className='menu-trigger'>
        <ArrowDropDownCircleIcon />
      </button>
      <div
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <div id='ProfileSection'>
          <Avatar className='Purple'>E</Avatar>
          <h5>Edward Jahoda</h5>
          <p>Beauchamp Engineering LLC</p>
        </div>
        <NavLink to='/' className='DropdownLink'>
          Your Profile
        </NavLink>
        <NavLink to='/Logout' className='DropdownLink'>
          Logout
        </NavLink>
      </div>
    </div>
  )
}

export default DropdownMenu
