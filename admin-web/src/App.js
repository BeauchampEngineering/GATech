import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'

function App() {
  return (
    <div className='App'>
      <NewUserForm />
      <AddAsset />
      <AddUsersToGroup />
    </div>
  )
}

export default App
