import React from 'react'
import { NativeRouter, Switch } from 'react-router-native'
import AuthProvider from './contexts/AuthContext'
import StyleProvider from './contexts/StyleContext'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import LoginPage from './components/pages/LoginPage'
import LogoutPage from './components/pages/LogoutPage'

import BasePage from './components/pages/BasePage'

const App = () => {
  return (
    <AuthProvider>
      <StyleProvider>
        <NativeRouter>
          <Switch>
            <PublicRoute path='/login' component={LoginPage} />
            <PrivateRoute path='/logout' component={LogoutPage} />
            <PrivateRoute exact path={['/', '/home']} component={BasePage} />
          </Switch>
        </NativeRouter>
      </StyleProvider>
    </AuthProvider>
  )
}

export default App
