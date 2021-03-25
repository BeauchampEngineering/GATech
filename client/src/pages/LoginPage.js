import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
    return (
        <Container>
            <h1>Log In</h1>
            <LoginForm/>
        </Container>
    )
}

export default LoginPage;