import React, {useState, useContext} from 'react';

const AuthContext = React.createContext();

export const useAuth = ()  => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    const loginUser = async (email, password) => {
        // go to server and verify user and respond with token
        const user = {email, password};
        setCurrentUser(user);
    };

    const logoutUser = async () => {
        // go to server and blacklist user's token
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