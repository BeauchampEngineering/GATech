import React, { useState } from 'react'
import axios from 'axios'
import '../component-styles/AddAsset.css'
import endpoints from '../endpoints'

const AddAsset = () => {
  const [assetName, setassetName] = useState('')

  const addAsset = (name) => {
    console.log('Adding asset')
    axios
      .post(endpoints.CREATE_NEW_ASSET, {
        name,
      })
      .then((response) => alert('Successfully added asset'))
      .catch((err) => console.log(err))
  }

  return (
    <div className='container'>
      <h3>Add Asset</h3>
      <input
        className='input'
        type='text'
        value={assetName}
        onChange={(text) => {
          setassetName(text.target.value)
        }}
        placeholder='Asset Name'
      />
      <button
        onClick={() => {
          addAsset(assetName)
        }}
      >
        Create Asset
      </button>
    </div>
  )
}

export default AddAsset
