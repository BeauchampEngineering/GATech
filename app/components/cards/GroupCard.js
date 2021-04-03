import React, {useState, useEffect} from 'react';
import {View, TextInput, Modal, Pressable} from 'react-native';
import {useAuth} from '../contexts/AuthContext';
import {useStyles} from '../../contexts/StyleContext';

const GroupCard = ({group}) => {
    
    const {currentUser} = useAuth();
    const {card} = useStyles();
    const [show, setShow] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // grab messages from the server
    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <View>
            <View>
                <Pressable onPress={handleShow}>
                    <View>
                        <Text>{group.members}</Text>
                        <Text>{group.lastMessage}</Text>
                    </View>
                </Pressable>
            </View>
            <Modal
                visible={show}
                onRequestClose={handleClose}
            >
                <View>
                    
                </View>
            </Modal>
        </View>
    );

};

export default GroupCard;