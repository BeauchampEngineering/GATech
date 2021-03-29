import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';
import {useAuth} from '../../contexts/AuthContext';
import {useStyles} from '../../contexts/StyleContext';

const LoginForm = () => {

    const {loginUser} = useAuth();
    const {input, button, form} = useStyles();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const history = useHistory();

    const handlePress = async () => {
        try {
            //send request to server
            await loginUser(email, password);
            history.push('/');
        } catch(err) {
            console.log(err.message);
        }
    };

    return (
        <View style={form.container}>
            <View style={input.container}>
                <View style={input.border}>
                    <TextInput
                        style={input.box}
                        value={email}
                        placeholder='Email'
                        onChangeText={onChangeEmail}
                    />
                </View>
            </View>
            <View style={input.container}>
                <View style={input.border}>
                    <TextInput
                        style={input.box}
                        value={password}
                        secureTextEntry={true}
                        placeholder='Password'
                        onChangeText={onChangePassword}
                    />
                </View>
            </View>
            <TouchableOpacity style={button.fill} onPress={handlePress}>
                <Text style={button.text}>Log in</Text>
            </TouchableOpacity> 
        </View>
    );

}

export default LoginForm;