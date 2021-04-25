import React, { useState, useEffect } from 'react'
import UserProfile from '../UserProfile/UserProfile'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import UserModal from '../modals/UserModal'

const UserCard = ({ user }) => {}

const UserPage = () => {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(async () => {
    // retrieve users from server
  }, [])

  const handleSearch = () => {
    setSearch('')
  }

  const renderUsers = () => {
    return users.map((user) => {
      return <UserCard user={user} />
    })
  }

  return (
    <Container fluid className='PageContainer'>
      <NavBar />
      {/* <BasicNavBar /> */}
      <h1>Users</h1>
      <Button style={{ float: 'right' }} onClick={handleShow}>
        +
      </Button>
      <Form inline>
        <FormControl
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Form>
      <UserModal show={show} onClose={handleClose} />
      <UserProfile />
    </Container>
  )
}

export default UserPage
