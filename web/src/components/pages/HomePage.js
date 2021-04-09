import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import BasicNavBar from '../bars/BasicNavBar'

const HomePage = () => {
  return (
    <Container fluid>
      <NavBar />
      <BasicNavBar />
      <h1>Home Page</h1>
    </Container>
  )
}

export default HomePage
