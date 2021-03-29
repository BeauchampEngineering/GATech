import React, { useEffect } from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {

    const {currentUser} = useAuth();

    return (
        <Route {...rest} render={props => !currentUser ? <Component {...props}/> : <Redirect to='/home'/>}/>
    );

};

export default PrivateRoute;