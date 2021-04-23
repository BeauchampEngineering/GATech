import './SuggestionRow.css'
import FriendCard from './FriendCard'

const SuggestionRow = () => {
  return (
    <div id='SuggestionContainer'>
      <h5>People You May Know</h5>
      <div id='SuggestionRow'>
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
        <FriendCard />
        <FriendCard />
      </div>
      <button id='SeeAllButton'>See All</button>
    </div>
  )
}

export default SuggestionRow
