import './UserProfile.css'
import { Avatar } from '@material-ui/core'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SearchIcon from '@material-ui/icons/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Button from 'react-bootstrap/Button'

import GradeIcon from '@material-ui/icons/Grade'
import HouseIcon from '@material-ui/icons/House'
import HomeIcon from '@material-ui/icons/Home'

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

      <div id='FriendRequest'>
        <h5>Aarun Sent you a friend request</h5>
        <div id='FriendButtons'>
          <Button>Confirm Request</Button>
          <Button variant='light'>Delete Request</Button>
        </div>
      </div>

      <div id='Intro'>
        <div id='IntroContent'>
          <h5>Intro</h5>
          <ul>
            <div className='IntroListItem'>
              <GradeIcon />
              <li>
                Studies at <b>Georgia Tech</b>
              </li>
            </div>
            <div className='IntroListItem'>
              <HouseIcon />
              <li>
                Lives in <b>Atlanta, GA</b>
              </li>
            </div>
            <div className='IntroListItem'>
              <HomeIcon />
              <li>
                From <b>Maryland</b>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
