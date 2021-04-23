import './FriendCard.css'
import edwardImg from '../../resources/edward.jpg'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

const FriendCard = () => {
  return (
    <div className='FriendCard'>
      <img src={edwardImg} />
      <h6>Edward Jahoda</h6>
      <button className='AddFriendButton'>
        <div id='ButtonContents'>
          <PersonAddIcon />
          Add Friend
        </div>
      </button>
    </div>
  )
}

export default FriendCard
