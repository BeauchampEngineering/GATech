import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import UserCard from '../cards/UserCard';

const UserPage = () => {

    const {page, input, pane, button} = useStyles();
    const [opacity, setOpacity] = useState(1);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // get assets from server
        const lst = []
        for (let i = 0; i < 10; i++) {
            lst.push({
                id: i,
                firstName: 'Kanye',
                lastName: 'West ' + i
            });
        };
        setUsers(lst);
    }, []);

    const handleCancel = () => {
        setSearch('');
    }

    const renderUsers = () => {

        const handleShow = () => setOpacity(0.1);
        const handleClose = () => setOpacity(1);

        return users.map(user => {
            const {id, firstName, lastName} = user;
            return <UserCard 
                        key={id} 
                        user={{firstName, lastName}} 
                        onShow={handleShow}
                        onClose={handleClose}
                    />
        });
    }

    return (
        <View style={page.container} opacity={opacity}>
            <View style={input.container}>
                <View style={input.border}>
                    <TextInput
                        style={input.box}
                        value={search}
                        placeholder='Search'
                        onChangeText={setSearch}
                    />
                    <Pressable onPress={handleCancel}>
                        <Icon
                            name='x-circle'
                            type='feather'
                        />
                    </Pressable>
                </View>
            </View>
            <View style={pane.horizontal}>
                {renderUsers()}
            </View>
            <NavBar selected='users'/>
        </View>
    )
};

export default UserPage;
