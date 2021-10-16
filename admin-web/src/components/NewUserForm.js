import React, { useState } from 'react'

import '../component-styles/NewUserForm.css'

const NewUserForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const addNewUser = (email, password, confirmPassword) => {
    // TODO: email validation

    // email not already registered and password == confirm password
    if (password === confirmPassword) {
      console.log('Creating New User')
    } else {
      setErrorMessage('Passwords do not match')
      setPassword('')
      setConfirmPassword('')
    }
  }

  return (
    <div className='container'>
      <h3>Add a New User</h3>
      <input
        className='input'
        type='text'
        value={email}
        onChange={(text) => {
          setErrorMessage('')
          setEmail(text.target.value)
        }}
        placeholder='email'
      />
      <input
        className='input'
        type='text'
        value={password}
        onChange={(text) => {
          setErrorMessage('')
          setPassword(text.target.value)
        }}
        placeholder='password'
      />
      <input
        className='input'
        type='text'
        value={confirmPassword}
        onChange={(text) => {
          setErrorMessage('')
          setConfirmPassword(text.target.value)
        }}
        placeholder='confirm password'
      />
      <p className='errorMessage'>{errorMessage}</p>
      <button
        onClick={() => {
          console.log('button clicked')
          addNewUser(email, password, confirmPassword)
        }}
      >
        Add new User
      </button>
    </div>
  )
}

export default NewUserForm