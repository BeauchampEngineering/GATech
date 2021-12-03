import { useEffect } from 'react'
import {
  saveGroupsToState,
  saveUsersToState,
  saveAssetsToState,
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
import AssignGroupsToAssets from './components/AssignGroupsToAssets'

function App() {
  useEffect(() => {
    saveGroupsToState()
    saveUsersToState()
    saveAssetsToState()
  }, [])
  return (
    <div className='App'>
      <NewUserForm />
      <NewGroup />
      <AssignGroupsToAssets />
      <AddAsset />
      <FaultAsset />
      <FixAsset />
      <DeleteGroup />
      <ViewAll />
      <DisplayPane />
    </div>
  )
}

export default App
