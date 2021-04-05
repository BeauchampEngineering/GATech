import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useStyles} from '../../contexts/StyleContext';
import NavBar from '../bars/NavBar';
import {Icon} from 'react-native-elements';

const UserCard = ({user}) => {

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
                        <View style={header.container}>
                    <TouchableOpacity onPress={handleClose}>
                            <Icon
                            name='arrow-left'
                            type='feather'
                        
                    />
                    </TouchableOpacity>
                </View>
                        <Text style={page.title}>{user.firstName}</Text>
                        <Text>{user.lastName}</Text>
                    </View>
                    <NavBar selected='users'/>
                </View>
            </Modal>
        </View>
    );

};

export default UserCard;
