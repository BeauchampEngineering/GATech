import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../component-styles/AddAsset.css'
import enpoints from '../enpoints'
import io from 'socket.io-client'

const FaultAsset = () => {
  
  const [assetId, setassetId ] = useState('')
  var socket = useRef()
  
  useEffect(() => {
    socket.current = io(enpoints.BASE_URL)
  }, [])

  
  const faultAsset = (name) => {
    socket.current.emit('join-asset', name)
    socket.current.emit("fault",{id: name, userId: 1})
    socket.current.on("fault", (m) => {
      console.log(m)
    })
  }

  return (
    <div className='container'>
      <h3>Fault Asset</h3>
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
          faultAsset(assetId)
        }}
      >
        Fault Asset
      </button>
    </div>
  )
}

export default FaultAsset