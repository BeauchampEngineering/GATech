import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';

const HomePage = () => {

    const {page, input, header} = useStyles();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    const handleCancel = () => {
        setShow(false);
        setSearch('');
    }

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
                    <Icon
                        name='chevron-left'
                        type='feather'
                        onPress={handleCancel}
                    />
                    <View style={input.container}>
                        <TextInput
                            value={search}
                            placeholder='Search'
                            onChangeText={setSearch}
                        />
                    </View>
                </View>
            }
            <NavBar selected='home'/>
        </View>
    )

}

export default HomePage;