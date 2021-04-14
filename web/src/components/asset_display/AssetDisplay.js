import './AssetDisplay.css'
import { useState } from 'react'
import Asset from '../asset/Asset'

const assets = [
  {
    id: 1,
    name: 'Pizza Machine',
    lastModified: '1/13/2020',
  },
  {
    id: 2,
    name: 'Hot Dog Machine',
    lastModified: '1/13/2020',
  },
  {
    id: 3,
    name: 'Roller',
    lastModified: '1/13/2020',
  },
  {
    id: 4,
    name: 'Greaser',
    lastModified: '1/13/2020',
  },
  {
    id: 5,
    name: 'Air Fryer',
    lastModified: '1/13/2020',
  },
  {
    id: 6,
    name: 'Oven',
    lastModified: '1/13/2020',
  },
  {
    id: 7,
    name: 'Microwave',
    lastModified: '1/13/2020',
  },
  {
    id: 8,
    name: 'Dishwasher',
    lastModified: '1/13/2020',
  },
  {
    id: 9,
    name: 'Toaster',
    lastModified: '1/13/2020',
  },
  {
    id: 10,
    name: 'Blender',
    lastModified: '1/13/2020',
  },
]

const AssetDisplay = () => {
  const [searchText, setsearchText] = useState('')

  const searchChanged = (e) => {
    setsearchText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div id='Container'>
      <div id='SearchBarContainer'>
        <input type='text' placeholder='Search' onChange={searchChanged} />
      </div>
      <div id='Filters'></div>
      <div id='AssetContainer'>
        {assets
          .filter((asset) =>
            asset.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((asset) => (
            <Asset
              key={asset.id}
              name={asset.name}
              lastModified={asset.lastModified}
            />
          ))}
      </div>
    </div>
  )
}

export default AssetDisplay
