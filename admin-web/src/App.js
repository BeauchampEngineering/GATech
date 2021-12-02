import { useEffect } from 'react'
import {
  saveGroupsToState,
  saveUsersToState,
} from './components/state/GetInitialState'
import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import FaultAsset from './components/FaultAsset'
import FixAsset from './components/FixAsset.js'
import DeleteGroup from './components/DeleteGroup'
import NewGroup from './components/NewGroup'
import ViewAll from './components/ViewAll'
import DisplayPane from './components/DisplayPane'

function App() {
  useEffect(() => {
    saveGroupsToState()
    saveUsersToState()
  }, [])
  return (
    <div className='App'>
      <NewGroup />
      <NewUserForm />
      <AddAsset />
      <FaultAsset />
      <FixAsset />
      <AddUsersToGroup />
      <DeleteGroup />
      <ViewAll />
      <DisplayPane />
    </div>
  )
}

export default App
