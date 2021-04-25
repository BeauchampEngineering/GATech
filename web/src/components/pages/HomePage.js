import './styles/HomePage.css';
import React from 'react';
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import Sidebar from '../bars/Sidebar'
import PostCard from '../cards/PostCard'

const HomePage = () => {
  return (
    <Container fluid className='PageContainer'>
      <NavBar />
      <div className='SidebarPostCollectionContainer'>
        <Sidebar className='Sidebar' />
        <div className='PostCollection'>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
