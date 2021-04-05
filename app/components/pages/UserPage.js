import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import UserCard from '../cards/UserCard';

const UserPage = () => {

    const {page, input} = useStyles();
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

    const renderUser = ({item}) => {
        return <UserCard user={item}/>
    };

    return (
        <View style={page.container}>
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
            <FlatList
                data={users}
                renderItem={renderUser}
                keyExtractor={user => user.id.toString()}
            />
            <NavBar selected='users'/>
        </View>
    )
};

export default UserPage;
