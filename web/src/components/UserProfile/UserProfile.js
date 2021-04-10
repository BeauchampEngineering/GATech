import './UserProfile.css'
import { Avatar } from '@material-ui/core'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SearchIcon from '@material-ui/icons/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const UserProfile = () => {
  return (
    <div className='ProfilePage'>
      <div className='Heading'>
        <img
          src='https://images.wallpaperscraft.com/image/everest_mountain_sky_tops_96976_1600x900.jpg'
          alt='landing image'
        />
        <Avatar className='Avatar' />
        <h3>Edward Jahoda</h3>
      </div>

      <div className='AboutBar'>
        <ul>
          <li>Posts</li>
          <li>About</li>
          <li>Friends 1556</li>
          <li>Photos</li>
          <li>Videos</li>
          <li>More</li>
        </ul>

        <div className='AboutActions'>
          <div id='respond'>
            <div className='IconDiv'>
              <PersonOutlineIcon />
            </div>
            <h6>Respond</h6>
          </div>
          <div className='IconDiv'>
            <ChatBubbleOutlineIcon />
          </div>
          <div className='IconDiv'>
            <SearchIcon />
          </div>
          <div className='IconDiv'>
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
