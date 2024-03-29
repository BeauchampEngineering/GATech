import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useAuth } from '../../contexts/AuthContext'

const LoginForm = () => {
  const { loginUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleClick = async () => {
    try {
      await loginUser(email, password)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          className='Input'
          type='email'
          placeholder='Email or Phone Number'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className='Input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button onClick={handleClick}>Log in</Button>
    </Form>
  )
}

export default LoginForm
