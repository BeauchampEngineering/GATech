import './FriendCard.css'
import edwardImg from '../../resources/edward.jpg'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import CloseIcon from '@material-ui/icons/Close'

const FriendCard = ({ id, name, img_src, onClose }) => {
  const temp = () => {
    console.log('hello world')
  }

  return (
    <div className='FriendCard'>
      <div id='ImgAndButton'>
        <img src={img_src} />
        <CloseIcon id='CloseIcon' onClick={() => onClose(id)} />
      </div>

      <h6>{name}</h6>
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

FriendCard.defaultProps = {
  img_src: edwardImg,
  name: 'Edward Jahoda',
}
