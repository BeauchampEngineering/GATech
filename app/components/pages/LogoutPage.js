import { useEffect } from 'react'
import { useHistory } from 'react-router-native'

const LogoutPage = () => {
  // const {logoutUser} = useAuth();
  const history = useHistory()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logoutUser()
        history.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
    handleLogout()
  }, [])

  return null
}

export default LogoutPage
