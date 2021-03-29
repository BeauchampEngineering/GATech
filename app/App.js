import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import AuthProvider from './contexts/AuthContext';
import StyleProvider from './contexts/StyleContext';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage';
import LogoutPage from './components/pages/LogoutPage';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import AssetPage from './components/pages/AssetPage';
import GroupPage from './components/pages/GroupPage';


const App = () => {
    return (
        <AuthProvider>
            <StyleProvider>
                <NativeRouter>
                    <Switch>
                        <PublicRoute path='/login' component={LoginPage}/>
                        <PrivateRoute path='/logout' component={LogoutPage}/>
                        <PrivateRoute exact path={['/', '/home']} component={HomePage}/>
                        <PrivateRoute path='/users' component={UserPage}/>
                        <PrivateRoute path='/assets' component={AssetPage}/>
                        <PrivateRoute path='/groups' component={GroupPage}/>
                    </Switch>
                </NativeRouter>
            </StyleProvider>
        </AuthProvider>
    );
};

export default App;
