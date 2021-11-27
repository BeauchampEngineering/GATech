import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteOrCreateGroup from './components/DeleteCreateGroup'
import FaultAsset from './components/FaultAsset'
import FixAsset from './components/FixAsset.js'


function App() {
  return (
    <div className='App'>
      <NewUserForm />
      <AddAsset />
      <FaultAsset />
      <FixAsset />
      <AddUsersToGroup />
      <DeleteOrCreateGroup />
    </div>
  )
}

export default App
