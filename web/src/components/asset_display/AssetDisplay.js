import './AssetDisplay.css'
import { useState } from 'react'
import AssetCard from '../cards/AssetCard'
import Select from 'react-select'

const assets = [
  {
    id: 1,
    name: 'Pizza Machine',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 2,
    name: 'Hot Dog Machine',
    lastModified: '1/13/2020',
    categories: ['Food', 'Manufacturing'],
  },
  {
    id: 3,
    name: 'Roller',
    lastModified: '1/13/2020',
    categories: ['Manufacturing'],
  },
  {
    id: 4,
    name: 'Greaser',
    lastModified: '1/13/2020',
    categories: ['Food', 'Manufacturing'],
  },
  {
    id: 5,
    name: 'Air Fryer',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 6,
    name: 'Oven',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 7,
    name: 'Microwave',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 8,
    name: 'Dishwasher',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 9,
    name: 'Toaster',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
  {
    id: 10,
    name: 'Blender',
    lastModified: '1/13/2020',
    categories: ['Food'],
  },
]

const categoryOptions = [
  { value: 'food', label: 'Food' },
  { value: 'maunfacturing', label: 'Manufacturing' },
]

const AssetDisplay = () => {
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState(null)

  function categoryFilterFunction(e) {
    if (!filter || e.categories.includes(filter)) {
      return e
    }
  }

  const renderAssets = () => {
      return assets.filter((asset) =>
        asset.name.toLowerCase().includes(searchText.toLowerCase())
      ).filter(categoryFilterFunction).map((asset) => (
        <AssetCard
          key={asset.id}
          name={asset.name}
          lastModified={asset.lastModified}
          categories={asset.categories}
        />
      ));
  }

  return (
    <div id='AssetDisplayContainer'>
      <div id='SearchBarContainer'>
        <input type='text' placeholder='Search' onChange={e => setSearchText(e.target.value)} />
      </div>
      <Select
        options={categoryOptions}
        placeholder='Categories'
        isClearable
        className='Selector'
        onChange={e => e === null ? setFilter(null) : setFilter(e.label)}
      />
      <div id='AssetContainer'>
        {renderAssets()}
      </div>
    </div>
  )
}

export default AssetDisplay
