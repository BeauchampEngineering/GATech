import './styles/Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import GroupIcon from '@material-ui/icons/Group'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined'
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <ul>
        <div className='ListItem'>
          <Avatar className='Avatar' />
          <li>Edward Jahoda</li>
        </div>
        <div className='ListItem'>
          <GroupIcon />
          <li>Find Friends</li>
        </div>
        <div className='ListItem'>
          <QueryBuilderOutlinedIcon />
          <li>Most Recent</li>
        </div>
        <div className='ListItem'>
          <StarBorderOutlinedIcon />
          <li>Favorites</li>
        </div>
        <div className='ListItem'>
          <SupervisedUserCircleIcon />
          <li>Groups</li>
        </div>
        <div className='ListItem'>
          <StorefrontIcon />
          <li>Marketplace</li>
        </div>
        <div className='ListItem'>
          <OndemandVideoIcon />
          <li>Watch</li>
        </div>
        <div className='ListItem'>
          <CalendarTodayOutlinedIcon />
          <li>Events</li>
        </div>
        <div className='ListItem'>
          <RestoreOutlinedIcon />
          <li>Memories</li>
        </div>
        <div className='ListItem'>
          <BookmarkIcon />
          <li>Saved</li>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
