import React, {useState, useEffect} from 'react';
import {
    View, 
    TextInput, 
    Modal, 
    Pressable, 
    TouchableOpacity, 
    Text, 
} from 'react-native';
import {useAuth} from '../../contexts/AuthContext';
import {useStyles} from '../../contexts/StyleContext';

let currentId = 10;

const GroupCard = ({group}) => {
    
    const {currentUser} = useAuth();
    const {card, page, input, button} = useStyles();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // grab messages from the server
        /*
            message = {
                id: 
                origin:
                message:
            }
        */
    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const sendMessage = () => {
        currentId++;
        setMessages([...messages, {id: currentId, origin: currentUser.id, content: message}]);
        setMessage('');
    }

    const renderMessages = () => {
        return messages.map(m => {

            const {id, origin, content} = m;
            const adjust = currentUser.id === origin ? 'right' : 'left';
            //use this to set the style

            return (
                <View key={id}>
                    <Text>{content}</Text>
                </View>
            )
        })
    }

    return (
        <View>
            <View style={card.container}>
                <Pressable onPress={handleShow}>
                    <View style={card.border}>
                        <Text style={card.title}>{group.members}</Text>
                        <Text style={card.body}>{group.lastMessage}</Text>
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
                    <View>
                        {renderMessages()}
                    </View>
                    <View style={input.container}>
                        <View style={input.border}>
                            <TextInput
                                value={message}
                                style={input.box}
                                placeholder='Type here'
                                onChangeText={setMessage}
                            />
                        </View>
                        <TouchableOpacity
                            style={button.fill}
                            onPress={sendMessage}
                        >
                            <Text style={button.text}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );

};


export default GroupCard;