import { useEffect } from 'react'
import {
  saveGroupsToState,
  saveUsersToState,
} from './components/state/GetInitialState'
import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteGroup from './components/DeleteGroup'
import NewGroup from './components/NewGroup'
import ViewAll from './components/ViewAll'
import DisplayPane from './components/DisplayPane'
import ImportSapForm from './components/ImportSapForm'
import ExportSapForm from './components/ExportSapForm'

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
      <AddUsersToGroup />
      <DeleteGroup />
      <ViewAll />
      <DisplayPane />
      <ImportSapForm />
      <ExportSapForm />
    </div>
  )
}

export default App
