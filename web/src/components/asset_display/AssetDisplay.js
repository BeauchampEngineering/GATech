import './AssetDisplay.css'
import Asset from '../asset/Asset'

const AssetDisplay = () => {
  return (
    <div id='Container'>
      <div id='SearchBarContainer'>
        <input type='text' placeholder='Search' />
      </div>
      <div id='Filters'></div>
      <div id='AssetContainer'>
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
      </div>
    </div>
  )
}

export default AssetDisplay
