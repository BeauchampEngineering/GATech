import React, { useState } from 'react'
import axios from 'axios'
import '../component-styles/AddAsset.css'
import enpoints from '../enpoints'
import { addAsset as addAssetToState } from './state/AssetState'

const AddAsset = () => {
  const [assetName, setassetName] = useState('')

  const addAsset = (name) => {
    console.log('Adding asset')
    axios
      .post(enpoints.CREATE_NEW_ASSET, {
        name,
      })
      .then((response) => {
        alert('Successfully added asset')
        setassetName('')
        addAssetToState({
          name: name,
        })
      })
      .catch((err) => {
        console.log(err)
        alert('Failed to add an asset')
      })
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
