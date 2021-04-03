import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';

const AssetCard = ({asset, onShow, onClose}) => {

    const {card, modal, page, button} = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        onClose();
    };
    
    const handleShow = () => {
        setShow(true);
        onShow();
    };

    const handleFault = () => {
        // fault asset
    }

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
                transparent={true}
                onRequestClose={handleClose}
            >
                <View style={modal.container}>
                    <View style={modal.fill}>
                        <TouchableOpacity onPress={handleClose}>
                            <Text>x</Text>
                        </TouchableOpacity>
                        <Text style={modal.title}>{asset.name}</Text>
                        <Text style={modal.body}>{asset.description}</Text>
                        <TouchableOpacity 
                            style={button.fill}
                            onPress={handleFault}
                        >
                            <Text style={button.text}>Fault</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );

};

export default AssetCard;