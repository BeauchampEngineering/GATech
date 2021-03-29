import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../contexts/StyleContext';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {

    const {logo} = useStyles();

    return (
        <View style={logo.container}>
            <Text style={logo.text}>PM</Text>
            <LoginForm/>
        </View>
    );

}

export default LoginPage;