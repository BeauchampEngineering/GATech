import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';

const AssetCard = ({asset}) => {

    const {card, page} = useStyles();
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
                    <View style={card.border}>
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
                    <TouchableOpacity onPress={handleClose}>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={page.title}>{asset.name}</Text>
                    <Text>{asset.description}</Text>
                    <NavBar selected='assets'/>
                </View>
            </Modal>
        </View>
    );

};

export default AssetCard;