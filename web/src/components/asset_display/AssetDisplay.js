import './AssetDisplay.css'
import { useState } from 'react'
import AssetCard from '../cards/AssetCard'
import Select from 'react-select'

import factoryImg from '../../resources/factory.jpg'
import formshrinkImg from '../../resources/Formshrink_R_550_g Cropped.jpg'
import tractorImg from '../../resources/tractor.jpg'
import multivacImg from '../../resources/Multi-Vac R530 Cropped.jpg'
import ipaImg from '../../resources/IPA420b Cropped.jpg'

const assets = [
  {
    id: 1,
    name: 'Factory',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: factoryImg,
  },
  {
    id: 2,
    name: 'Form Shrinking',
    lastModified: '1/13/2020',
    categories: ['Food', 'Manufacturing'],
    imgSrc: formshrinkImg,
  },
  {
    id: 3,
    name: 'Tractor',
    lastModified: '1/13/2020',
    categories: ['Manufacturing'],
    imgSrc: tractorImg,
  },
  {
    id: 4,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food', 'Manufacturing'],
    imgSrc: multivacImg,
  },
  {
    id: 5,
    name: 'IPA',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: ipaImg,
  },
  {
    id: 6,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: formshrinkImg,
  },
  {
    id: 7,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: formshrinkImg,
  },
  {
    id: 8,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: formshrinkImg,
  },
  {
    id: 9,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: formshrinkImg,
  },
  {
    id: 10,
    name: 'Multi Vac',
    lastModified: '1/13/2020',
    categories: ['Food'],
    imgSrc: formshrinkImg,
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
    return assets
      .filter((asset) =>
        asset.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter(categoryFilterFunction)
      .map((asset) => (
        <AssetCard
          key={asset.id}
          name={asset.name}
          lastModified={asset.lastModified}
          categories={asset.categories}
          imgSrc={asset.imgSrc}
        />
      ))
  }

  return (
    <div id='AssetDisplayContainer'>
      <div id='SearchBarContainer'>
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <Select
        options={categoryOptions}
        placeholder='Categories'
        isClearable
        className='Selector'
        onChange={(e) => (e === null ? setFilter(null) : setFilter(e.label))}
      />
      <div id='AssetContainer'>{renderAssets()}</div>
    </div>
  )
}

export default AssetDisplay
