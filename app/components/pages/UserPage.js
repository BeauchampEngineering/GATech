import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import UserCard from '../cards/UserCard';

const UserPage = () => {

    const {page, input, header} = useStyles();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // get assets from server
        const lst = []
        for (let i = 0; i < 20; i++) {
            lst.push({
                id: i,
                firstName: 'Kanye',
                lastName: 'West ' + i
            });
        };
        setUsers(lst);
    }, []);

    const handleCancel = () => {
        setShow(false);
        setSearch('');
    }

    const renderUser = ({item}) => {
        return <UserCard user={item}/>
    };

    return (
        <View style={page.container}>
            {!show &&
                <View style={header.container}>
                    <View style={header.right}>
                        <Icon
                            name='search'
                            type='feather'
                            onPress={() => setShow(true)}
                        />
                    </View>
                </View>
            }
            {show && 
                <View style={header.container}>
                    <View style={header.left}>
                        <Icon
                        name='chevron-left'
                        type='feather'
                        onPress={handleCancel}
                    />
                    </View>
                    <View style={input.container}>
                        <TextInput
                            value={search}
                            placeholder='Search'
                            onChangeText={setSearch}
                        />
                    </View>
                </View>
            }
            <FlatList
                data={users}
                renderItem={renderUser}
                keyExtractor={user => user.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <NavBar selected='users'/>
        </View>
    )
};

export default UserPage;
