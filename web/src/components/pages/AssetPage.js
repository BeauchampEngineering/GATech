import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import NavBar from '../bars/NavBar'
import AssetModal from '../modals/AssetModal'
import BasicNavBar from '../bars/BasicNavBar'

const AssetCard = ({ asset }) => {}

const AssetPage = () => {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const [assets, setAssets] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(async () => {
    // retrieve assets from server
  }, [])

  const handleSearch = () => {
    setSearch('')
  }

  const renderAssets = () => {
    return assets.map((asset) => {
      return <AssetCard asset={asset} />
    })
  }

  return (
    <Container fluid>
      <NavBar />
      <BasicNavBar />
      <h1>Assets</h1>
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
      <AssetModal show={show} onClose={handleClose} />
    </Container>
  )
}

export default AssetPage
