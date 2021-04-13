import './Asset.css'
import AssetPageIndividual from '../asset_page/AssetPageIndividual'
import { Link } from 'react-router-dom'

const Asset = ({ name, lastModified }) => {
  return (
    <Link to={`/assets/${name.toLowerCase()}`}>
      <div id='Asset'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/49/Fann_Mountains_vertical_2013.jpg'
          alt='mountain'
        />
        <h4>{name}</h4>
        <h5>{lastModified}</h5>
      </div>
    </Link>
  )
}

Asset.defaultProps = {
  name: 'Mountain',
  lastModified: '4/12/2021',
}

export default Asset
