import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../component-styles/AddAsset.css'
import endpoints from '../endpoints'
import io from 'socket.io-client'

const FixAsset = () => {
  const [assetId, setassetId] = useState('')
  var socket = useRef()

  useEffect(() => {
    socket.current = io(endpoints.BASE_URL)
  }, [])

  const fixAsset = (name) => {
    socket.current.emit('join-asset', name)
    socket.current.emit('fix', { id: name, userId: 1 })
    socket.current.on('fix', (m) => {
      console.log(m)
    })
  }

  return (
    <div className='container'>
      <h3>Fix Asset</h3>
      <input
        className='input'
        type='text'
        value={assetId}
        onChange={(text) => {
          setassetId(text.target.value)
        }}
        placeholder='Asset Id'
      />
      <button
        onClick={() => {
          fixAsset(assetId)
        }}
      >
        Fix Asset
      </button>
    </div>
  )
}

export default FixAsset
