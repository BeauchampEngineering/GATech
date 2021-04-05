import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    FlatList
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import AssetCard from '../cards/AssetCard';

const AssetPage = () => {

    const {page, input, header} = useStyles();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        // get assets from server
        const lst = []
        for (let i = 0; i < 20; i++) {
            lst.push({
                id: i,
                name: 'Pizza',
                description: 'Machine ' + i
            });
        };
        setAssets(lst);
    }, []);

    const handleCancel = () => {
        setShow(false);
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
            <FlatList
                data={assets}
                renderItem={renderAsset}
                keyExtractor={asset => asset.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <NavBar selected='assets'/>
        </View>
    )
};

export default AssetPage;
