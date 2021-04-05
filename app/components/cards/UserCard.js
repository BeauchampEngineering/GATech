import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';

const UserCard = ({user}) => {

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
                        <Text style={card.title}>{user.firstName}</Text>
                        <Text style={card.body}>{user.lastName}</Text>
                    </View>
                </Pressable>
            </View>
            <Modal
                visible={show}
                onRequestClose={handleClose}
            >
                <View style={page.container}>
                    <View>
                        <TouchableOpacity onPress={handleClose}>
                            <Text>{'<'}</Text>
                        </TouchableOpacity>
                        <Text style={page.title}>{user.firstName}</Text>
                        <Text>{user.lastName}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );

};

export default UserCard;
