import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm/>
        </Container>
    )
}

export default LoginPage;