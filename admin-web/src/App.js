import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteOrCreateGroup from './components/DeleteCreateGroup'
import NewGroup from './components/NewGroup'

function App() {
  return (
    <div className='App'>
      <NewGroup />
      <NewUserForm />
      <AddAsset />
      <AddUsersToGroup />
      <DeleteOrCreateGroup />
    </div>
  )
}

export default App
