import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import LogoutPage from './components/pages/LogoutPage'
import UserPage from './components/pages/UserPage'
import AssetPage from './components/pages/AssetPage'
import GroupPage from './components/pages/GroupPage'
import AssetPageIndividual from './components/asset_page/AssetPageIndividual'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PublicRoute path='/login' component={LoginPage} />
          <PrivateRoute path='/logout' component={LogoutPage} />
          <PrivateRoute exact path={['/', '/home']} component={HomePage} />
          <PrivateRoute path='/home' component={HomePage} />
          <PrivateRoute path='/users' component={UserPage} />
          <PrivateRoute path='/assets' component={AssetPage} exact />
          <PrivateRoute path='/assets/:name' component={AssetPageIndividual} />
          <PrivateRoute path='/groups' component={GroupPage} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
