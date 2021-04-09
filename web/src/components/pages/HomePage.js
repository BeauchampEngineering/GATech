import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import Post from '../posts/Posts'
import BasicNavBar from '../bars/BasicNavBar'

const HomePage = () => {
  return (
    <Container fluid>
      <NavBar />
      <BasicNavBar />
      <h1>Home Page</h1>
      <Post />
      <Post />
      <Post />
    </Container>
  )
}

export default HomePage
