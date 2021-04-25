import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';

const NavBar = ({selected}) => {

    const {navbar} = useStyles();

    return (
            <View style={navbar.container}>
                <Link to='/home' component={TouchableOpacity}>
                    <Icon
                        name='home'
                        type='feather'
                        color={selected === 'home' ? 'blue' : 'black'}
                    />
                </Link>
                <Link to='/users' component={TouchableOpacity}>
                    <Icon
                        name='users'
                        type='feather'
                        color={selected === 'users' ? 'blue' : 'black'}
                    /> 
                </Link>
                <Link to='/assets' component={TouchableOpacity}>
                    <Icon
                        name='settings'
                        type='feather'
                        color={selected === 'assets' ? 'blue' : 'black'}
                    />
                </Link>
                <Link to='/groups' component={TouchableOpacity}>
                    <Icon
                        name='message-circle'
                        type='feather'
                        color={selected === 'groups' ? 'blue' : 'black'}
                    />
                </Link>
                <Link to='/logout' component={TouchableOpacity}>
                    <Icon
                        name='menu'
                        type='feather'
                    />
                </Link>
            </View>
    );

}


export default NavBar;