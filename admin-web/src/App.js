import './App.css'
import AddAsset from './components/AddAsset'
import AddUsersToGroup from './components/AddUsersToGroup'
import NewUserForm from './components/NewUserForm'
import DeleteOrCreateGroup from './components/DeleteCreateGroup'
import ImportSapForm from './components/ImportSapForm'
import ExportSapForm from './components/ExportSapForm'

function App() {
  return (
    <div className='App'>
      <NewUserForm />
      <AddAsset />
      <AddUsersToGroup />
      <DeleteOrCreateGroup />
      <ImportSapForm />
      <ExportSapForm />
    </div>
  )
}

export default App
