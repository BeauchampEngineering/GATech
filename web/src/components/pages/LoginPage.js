import './Login.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import LoginForm from '../forms/LoginForm'
import Button from 'react-bootstrap/Button'

const LoginPage = () => {
  return (
    <Container id='LoginContainer'>
      <div id='Information'>
        <h3>facebook</h3>
        <h4>Connect with friends and the world around you on Facebook</h4>
      </div>
      <div id='LoginContainer'>
        <div id='LoginForm'>
          <input type='text' placeholder='Email or Phone Number' />
          <input type='text' placeholder='Password' />
          <Button>Log In</Button>
          <p>Forgot Password?</p>
          <Button>Create New Account</Button>
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
