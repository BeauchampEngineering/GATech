import React, {useState, useContext} from 'react';

const AuthContext = React.createContext();

export const useAuth = ()  => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);

    const loginUser = async (email, password) => {
        // go to server and verify user and respond with token
        const user = {email, password};
        sessionStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
    };

    const logoutUser = async () => {
        // go to server and blacklist user's token
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