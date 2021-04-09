import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import BasicNavBar from '../bars/BasicNavBar'

const GroupPage = () => {
  return (
    <Container fluid>
      <NavBar />
      <BasicNavBar />
      <h1>Groups</h1>
    </Container>
  )
}

export default GroupPage
