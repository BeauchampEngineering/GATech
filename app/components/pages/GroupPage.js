import React, {useEffect, useState} from 'react';
import {View, TextInput, Pressable, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import GroupCard from '../cards/GroupCard';

const GroupPage = () => {

    const {page, header, input} = useStyles();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
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

    const handleCancel = () => {
        setShow(false);
        setSearch('');
    }

    const renderGroup = ({item}) => {
        return <GroupCard group={item}/>
    };

    return (
        <View style={page.container}>
            {!show &&
                <View style={header.container}>
                    <View style={header.right}>
                        <Pressable onPress={() => setShow(true)}>
                            <Icon
                                name='search'
                                type='feather'
                            />
                        </Pressable>
                    </View>
                </View>
            }
            {show && 
                <View style={header.container}>
                    <Pressable onPress={handleCancel}>
                        <Icon
                            name='chevron-left'
                            type='feather'
                        />
                    </Pressable>
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
                data={groups}
                renderItem={renderGroup}
                keyExtractor={group => group.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <NavBar selected='groups'/>
        </View>
    );

}

export default GroupPage;