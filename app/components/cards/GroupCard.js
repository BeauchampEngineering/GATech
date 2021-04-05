import React, {useState, useEffect} from 'react';
import {
    View, 
    TextInput, 
    Modal, 
    Pressable, 
    TouchableOpacity, 
    Text,
    KeyboardAvoidingView,
    FlatList 
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useAuth} from '../../contexts/AuthContext';
import {useStyles} from '../../contexts/StyleContext';
import {Icon} from 'react-native-elements';

let currentId = 10;

const GroupCard = ({group}) => {
    
    const {currentUser} = useAuth();
    const {card, page, input, header, button, footer} = useStyles();
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

    const renderMessage = ({item}) => {

        const adjust = currentUser.id === item.origin ? 'right' : 'left';


        return (
            <View>
                <Text>{item.content}</Text>
            </View>
        );
    }

    return (
        <View>
            <View>
                <Pressable onPress={handleShow}>
                    <View style={card.container}>
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
                    <KeyboardAvoidingView 
                        behavior='height' 
                        style={{flex: 1}}
                        keyboardVerticalOffset={40}
                    >
                        <View style={header.container}>
                            <View style={header.left}>
                                <Icon
                                    name='chevron-left'
                                    type='feather'
                                    onPress={handleClose}
                                />
                            </View>
                        </View>
                        <FlatList
                            data={messages}
                            renderItem={renderMessage}
                            keyExtractor={message => message.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={footer.container}>
                            <View style={input.container}>
                                <TextInput
                                    value={message}
                                    placeholder='Type here'
                                    onChangeText={setMessage}
                                />
                                <Icon
                                    name='send'
                                    type='feather'
                                    onPress={sendMessage}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );

};


export default GroupCard;