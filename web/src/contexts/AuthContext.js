import React, {useState, useContext} from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export const useAuth = ()  => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);

    const loginUser = async (email, password) => {
        const {data} = await axios.post('http://portal-manager.com/auth/login', {
            email: email,
            password: password
        });
        sessionStorage.setItem('user', JSON.stringify(data));
        setCurrentUser(data);
    };

    const logoutUser = async () => {
        const {data} = await axios.get('http://portal-manager.com/auth/logout');
        console.log(data);
        sessionStorage.setItem('user', null);
        setCurrentUser(null);
    }

    const value = {
        currentUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;