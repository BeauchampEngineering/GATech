import React, { useState } from 'react'
import axios from 'axios'
import '../../component-styles/AddAsset.css'
import endpoints from '../../endpoints'

const TextAndButton = ({ placeholder, buttonText, title, onClick }) => {
  const [text, setText] = useState('')

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
      <h3>{title}</h3>
      <input
        className='input'
        type='text'
        value={text}
        onChange={(text) => {
          setText(text.target.value)
        }}
        placeholder={placeholder}
      />
      <button
        onClick={() => {
          onClick(text)
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default TextAndButton
