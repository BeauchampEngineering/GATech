import './styles/AssetCard.css'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

const badgeColor = (category) => {
  switch (category) {
    case 'Food':
      return 'primary'
    case 'Manufacturing':
      return 'danger'
    default:
      return 'primary'
  }
}

const AssetCard = ({ name, lastModified, categories }) => {
  return (
    <Link to={`/assets/${name.toLowerCase()}`}>
      <div id='Asset'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/49/Fann_Mountains_vertical_2013.jpg'
          alt='mountain'
        />
        <h4>{name}</h4>
        {categories.map((category, i) => (
          <Badge key={i} variant={badgeColor(category)}>
            {category}
          </Badge>
        ))}
        <h5>{lastModified}</h5>
      </div>
    </Link>
  )
}

AssetCard.defaultProps = {
  name: 'Mountain',
  lastModified: '4/12/2021',
}

export default AssetCard;
