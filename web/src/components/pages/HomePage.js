import React from 'react'
import './HomePage.css'

import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import Sidebar from '../sidebar/Sidebar'
import Post from '../posts/Posts'
import BasicNavBar from '../bars/BasicNavBar'

import SuggestionRow from '../cards/SuggestionRow'

const HomePage = () => {
  return (
    <Container fluid className='PageContainer'>
      <NavBar />
      {/* <BasicNavBar /> */}
      <div className='SidebarPostCollectionContainer'>
        <Sidebar className='Sidebar' />
        <div className='PostCollection'>
          <Post />
          <Post />
          <SuggestionRow />
          <Post />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
