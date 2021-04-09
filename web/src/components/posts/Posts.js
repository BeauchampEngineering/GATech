import './Posts.css'
import { Avatar } from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'

const Posts = () => {
  return (
    <div className='Post'>
      <div className='PostHeader'>
        <Avatar />
        <div className='PostHeaderText'>
          <h5>Edward Jahoda</h5>
          <h6>2:30 PM EST</h6>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
        dignissimos animi iusto, illum excepturi necessitatibus perferendis
        explicabo hic itaque maiores eaque! Quia nobis dolorum deleniti iusto.
        Maiores consectetur officiis laboriosam?
      </p>
      <img src='https://images.wallpaperscraft.com/image/mountains_clouds_dusk_154131_1600x900.jpg' />
      <div className='Reactions'>
        <div className='ReactionSection'>
          <ThumbUpOutlinedIcon />
          <h6>Like</h6>
        </div>
        <div className='ReactionSection'>
          <ChatBubbleOutlineOutlinedIcon />
          <h6>Comment</h6>
        </div>
      </div>
      <div className='Comments'>
        <Avatar className='Avatar' />
        <div className='CommentsInput'>
          <input type='text' placeholder='Write a comment...' />
        </div>
      </div>
    </div>
  )
}

export default Posts
