import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';

const UserCard = ({user, onShow, onClose}) => {

    const {card, modal, page} = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        onClose();
    };
    
    const handleShow = () => {
        setShow(true);
        onShow();
    };

    return (
        <View>
            <View style={card.container}>
                <Pressable onPress={handleShow}>
                    <View style={card.border}>
                        <Text style={card.title}>{user.firstName}</Text>
                        <Text style={card.body}>{user.lastName}</Text>
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
                        <Text style={modal.title}>{user.firstName}</Text>
                        <Text style={modal.body}>{user.lastName}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );

};

export default UserCard;
