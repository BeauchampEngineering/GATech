import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Pressable, 
    FlatList
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import AssetCard from '../cards/AssetCard';

const AssetPage = () => {

    const {page, input, pane, button} = useStyles();
    const [search, setSearch] = useState('');
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        // get assets from server
        const lst = []
        for (let i = 0; i < 10; i++) {
            lst.push({
                id: i,
                name: 'Pizza',
                description: 'Machine ' + i
            });
        };
        setAssets(lst);
    }, []);

    const handleCancel = () => {
        setSearch('');
    }

    const handleQR = () => {
        // QR
    }

    const renderAsset = ({item}) => {
        return <AssetCard asset={item}/>
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
                <TouchableOpacity 
                    style={button.fill}
                    onPress={handleQR}
                >
                    <Text style={button.text}>QR</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={assets}
                renderItem={renderAsset}
                keyExtractor={asset => asset.id.toString()}
            />
            <NavBar selected='assets'/>
        </View>
    )
};

export default AssetPage;
