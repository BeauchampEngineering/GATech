import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteOrCreateGroup from './components/DeleteCreateGroup'

function App() {
  return (
    <div className='App'>
      <NewUserForm />
      <AddAsset />
      <AddUsersToGroup />
      <DeleteOrCreateGroup />
    </div>
  )
}

export default App
