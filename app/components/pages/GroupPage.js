import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';

const GroupPage = () => {

    const {page} = useStyles();

    return (
        <View style={page.container}>
            <NavBar selected='groups'/>
        </View>
    );

}

export default GroupPage;