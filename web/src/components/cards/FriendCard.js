import './FriendCard.css'
import edwardImg from '../../resources/edward.jpg'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import CloseIcon from '@material-ui/icons/Close'

const FriendCard = () => {
  return (
    <div className='FriendCard'>
      <div id='ImgAndButton'>
        <img src={edwardImg} />
        <CloseIcon id='CloseIcon' />
      </div>

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
