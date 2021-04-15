import React from 'react'
import './HomePage.css'

import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import Sidebar from '../sidebar/Sidebar'
import Post from '../posts/Posts'
import BasicNavBar from '../bars/BasicNavBar'

const HomePage = () => {
  return (
    <Container fluid className='PageContainer'>
      <NavBar />
      <BasicNavBar />
      <h1>Home Page</h1>
      <div className='SidebarPostCollectionContainer'>
        <Sidebar className='Sidebar' />
        <div className='PostCollection'>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
