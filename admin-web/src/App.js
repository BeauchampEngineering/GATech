import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteGroup from './components/DeleteGroup'
import NewGroup from './components/NewGroup'

function App() {
  return (
    <div className='App'>
      <NewGroup />
      <NewUserForm />
      <AddAsset />
      <AddUsersToGroup />
      <DeleteGroup />
    </div>
  )
}

export default App
