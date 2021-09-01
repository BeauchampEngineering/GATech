import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import {useAuth} from '../../contexts/AuthContext';

const LogoutPage = () => {

    const {logoutUser} = useAuth();
    const history = useHistory();

    useEffect(async () => {
        try {
            await logoutUser();
            history.push('/login');
        } catch(err) {
            console.log(err.response.data);
        }
    }, []);

    return null;
    
};

export default LogoutPage;