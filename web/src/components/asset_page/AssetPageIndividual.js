import './AssetPageIndividual.css'
import Navbar from '../bars/NavBar'
<<<<<<< HEAD
import MaintenanceEntry from '../cards/MaintenanceCard'
=======
import MaintenanceEntry from '../maintenance_entry/MaintenanceEntry'
import Container from 'react-bootstrap/Container'
>>>>>>> main

const AssetPageIndividual = ({ title, lastModified, imageSrc }) => {
  const maintenanceEntries = [
    {
      key: 1,
      employee: 'Craig',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      key: 2,
      employee: 'Himanish',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      key: 3,
      employee: 'Ryan',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      key: 4,
      employee: 'Aarun',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
  ]

  return (
    <div id='IndividualContainer' className='PageContainer'>
      <Navbar />
      <div id='ContentContainer'>
        <div id='IndividualTextHeading'>
          <h2>{title}</h2>
          <h3>Last Modified: {lastModified}</h3>
        </div>
        <div id='ImageContainer'>
          <img src={imageSrc} />
        </div>

        {maintenanceEntries.map((values) => (
          <MaintenanceEntry
            key={values.key}
            employee={values.employee}
            date={values.date}
            description={values.description}
          />
        ))}
      </div>
    </div>
  )
}

AssetPageIndividual.defaultProps = {
  title: 'Mountain',
  lastModified: '4/12/2021',
  imageSrc:
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Fann_Mountains_vertical_2013.jpg',
}

export default AssetPageIndividual
