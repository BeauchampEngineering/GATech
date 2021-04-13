import './MaintenanceEntry.css'
import { Avatar } from '@material-ui/core'

const MaintenanceEntry = ({ employee, date, description }) => {
  return (
    <div id='EntryContainer'>
      <Avatar id='Avatar' />
      <div id='TextInformation'>
        <h4>{employee}</h4>
        <h5>{date}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MaintenanceEntry
