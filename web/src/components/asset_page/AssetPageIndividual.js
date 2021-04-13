import './AssetPageIndividual.css'
import MaintenanceEntry from '../maintenance_entry/MaintenanceEntry'

const AssetPageIndividual = ({ title, lastModified, imageSrc }) => {
  const maintenanceEntries = [
    {
      employee: 'Craig',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      employee: 'Himanish',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      employee: 'Ryan',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
    {
      employee: 'Aarun',
      date: '4/10/2021',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sunt deserunt quibusdam doloribus ut totam quisquam fugit repellat! Rem, aperiam? Autem nulla in sapiente, ab omnis asperiores laudantium facere molestiae?',
    },
  ]

  return (
    <div id='IndividualContainer'>
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
