import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';

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
            <View style={card.container}>
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
                </View>
            </Modal>
        </View>
    );

};

export default AssetCard;