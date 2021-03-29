import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import AssetCard from '../cards/AssetCard';

const AssetPage = () => {

    const {page, input, pane, button} = useStyles();
    const [opacity, setOpacity] = useState(1);
    const [search, onChangeSearch] = useState('');
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
        onChangeSearch('');
    }

    const handleQR = () => {
        // QR
    }

    const renderAssets = () => {

        const handleShow = () => setOpacity(0.1);
        const handleClose = () => setOpacity(1);

        return assets.map(asset => {
            const {id, name, description} = asset;
            return <AssetCard 
                        key={id} 
                        asset={{name, description}} 
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
                        onChangeText={onChangeSearch}
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
            <View style={pane.container}>
                {renderAssets()}
            </View>
            <NavBar selected='assets'/>
        </View>
    )
};

export default AssetPage;
