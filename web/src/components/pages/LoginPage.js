import './styles/LoginPage.css'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const LoginPage = () => {
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
    <Container fluid id='LoginContainer' className='PageContainer'>
      <div id='Information'>
        <h3>facebook</h3>
        <h4>Connect with friends and the world around you on Facebook.</h4>
      </div>
      <div id='LoginFormContainer'>
        <div id='LoginForm'>
          <input
            className='input'
            type='text'
            placeholder='Email or Phone Number'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input'
            type='text'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button id='LoginButton' onClick={handleClick}>
            Log In
          </Button>
          <a>Forgot Password?</a>
          <div id='Line'></div>
          <Button id='NewAccount' variant='success'>
            Create New Account
          </Button>
        </div>
        <div id='LoginText'>
          <p>
            <b>Create a Page</b> for a celebrity, band or business
          </p>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage
