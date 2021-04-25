import './SuggestionRow.css'

import { useState } from 'react'
import FriendCard from './FriendCard'
import edwardImg from '../../resources/edward.jpg'

const SuggestionRow = () => {
  const [friendSuggestions, setFriendSuggestions] = useState([
    {
      id: 1,
      name: 'Edward Jahoda',
      img_src: edwardImg,
    },
    {
      id: 2,
      name: 'Aarun Srinivas',
      img_src: edwardImg,
    },
    {
      id: 3,
      name: 'Ryan Ding',
      img_src: edwardImg,
    },
    {
      id: 4,
      name: 'Himanish Reddy',
      img_src: edwardImg,
    },
    {
      id: 5,
      name: 'Craig Nyazema',
      img_src: edwardImg,
    },
    {
      id: 6,
      name: 'Edward Jahoda',
      img_src: edwardImg,
    },
  ])
  const onClose = (id) => {
    console.log('on close called')
    console.log(id)
    setFriendSuggestions(friendSuggestions.filter((fs) => fs.id !== id))
  }

  return (
    <div id='SuggestionContainer'>
      <h5>People You May Know</h5>
      <div id='SuggestionRow'>
        {/* <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard /> */}
        {friendSuggestions.map((friend) => (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            img_src={friend.img_src}
            onClose={onClose}
          />
        ))}
      </div>
      <button id='SeeAllButton'>See All</button>
    </div>
  )
}

export default SuggestionRow
