import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable, ImageBackground} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import {Icon} from 'react-native-elements';

const AssetCard = ({asset}) => {

    const {card, page, header} = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    
    const handleShow = () => {
        setShow(true);
    };

    return (
        <View>
            <View>
                <Pressable onPress={handleShow}>
                    <View style={card.container}>
                        <Text style={card.title}>{asset.name}</Text>
                        <Text style={card.body}>{asset.description}</Text>
                    </View>
                </Pressable>
            </View>
            <Modal
                visible={show}
                onRequestClose={handleClose}
            >
                <View style={page.container}>
                <View style={header.container}>
                    <TouchableOpacity onPress={handleClose}>
                            <Icon
                            name='arrow-left'
                            type='feather'
                        
                    />
                    </TouchableOpacity>
                </View>
                    <Text style={page.title}>{asset.name}</Text>
                        <ImageBackground source ={require('../../assets/machine.jpg')} style ={page.containeri}></ImageBackground>   
                    <Text>{asset.description}</Text>
                    <NavBar selected='assets'/>
                </View>
            </Modal>
        </View>
    );

};

export default AssetCard;