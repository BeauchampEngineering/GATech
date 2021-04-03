import React, {useEffect, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import GroupCard from '../cards/GroupCard';

const GroupPage = () => {

    const {page, pane, input} = useStyles();
    const [search, setSearch] = useState('');
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        // grab groups from server
        /*
            group = {
                id:
                members:
                lastMessage:
            }
        */
       const lst = [];
       for(let i = 0; i < 10; i++) {
           lst.push({
               id: i,
               members: 'Kanye, Cudi, Frank',
               lastMessage: 'I miss the old Kanye'
           });
       }
       setGroups(lst);
    }, []);

    const handleCancel = () => setSearch('');

    const renderGroups = () => {
        return groups.map(group => {
            const {id, members, lastMessage} = group;
            return <GroupCard 
                        key={id}
                        group={{members, lastMessage}}
                    />
        });
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
            <View style={pane.vertical}>
                {renderGroups()}
            </View>
            <NavBar selected='groups'/>
        </View>
    );

}

export default GroupPage;