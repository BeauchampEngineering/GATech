import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserPage from './pages/UserPage';
import AssetPage from './pages/AssetPage';
import GroupPage from './pages/GroupPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PublicRoute path='/login' component={LoginPage}/>
          <PrivateRoute path='/logout' component={LogoutPage}/>
          <PrivateRoute exact path={['/', '/home']} component={HomePage}/>
          <PrivateRoute path='/home' component={HomePage}/>
          <PrivateRoute path='/users' component={UserPage}/>
          <PrivateRoute path='/assets' component={AssetPage}/>
          <PrivateRoute path='/groups' component={GroupPage}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
