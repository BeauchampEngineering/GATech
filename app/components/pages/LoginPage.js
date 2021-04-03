import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {

    const {page} = useStyles();

    return (
        <View style={page.container}>
            <Text style={page.title}>PM</Text>
            <LoginForm/>
        </View>
    );

}

export default LoginPage;