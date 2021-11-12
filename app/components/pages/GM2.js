import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'
import axios from 'axios'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'

export default function Example({ route }) {
  const groupId = route.params.groupId
  // const groupId = 'f8736025-0c0d-4912-b358-0308368aeb00'

  const [messages, setMessages] = useState([])

  // const userId = 'd5a35fb4-462b-4d16-9749-a15b1ba3436c'
  const userId = GLOBAL.userId
  console.log('ON GM2 userId is ' + userId + ' groudId is ' + groupId)

  var socket
  useEffect(() => {
    socket = io(endpoints.BASE_URL)
    socket.emit('join', groupId)
    socket.on('message', (message) => {
      console.log(
        'Received msg from server ' + JSON.stringify(message, null, 4)
      )

      displayMessageUI(message)

      console.log('after update messages is ' + messages)
      // console.log('messages is ' + JSON.stringify(messages, null, 4))
    })

    console.log('Running axios get')
    axios
      .get(
        endpoints.GET_GROUP_MESSAGES.replace(':userId', userId).replace(
          ':groupId',
          groupId
        )
      )
      .then((res) => {
        // console.log('Res is ' + JSON.stringify(res.data, null, 4))
        console.log(
          'Updating from axios get ' + JSON.stringify(res.data, null, 4)
        )

        const oldMessages = res.data.reverse().map((serverM) => {
          displayMessageUI(serverM)
        })
        console.log('old messages ' + JSON.stringify(oldMessages, null, 4))
      })
      .catch((err) => console.log(err))
  }, [])

  function displayMessageUI(message) {
    if (message.userId === userId) {
      // message this user sent
      console.log('from this user')
      setMessages((previousMessages) =>
        GiftedChat.append(
          previousMessages,
          mapServerMessageToUIMessage(message)
        )
      )
    } else {
      // message a different user sent
      console.log('from a different user')
      setMessages((oldArray) => [
        mapServerMessageToUIMessage(message),
        ...oldArray,
      ])
    }
  }

  function mapServerMessageToUIMessage(serverMessage) {
    console.log('mapServer message starts')
    const res = {
      _id: serverMessage.id,
      text: serverMessage.message,
      createdAt: serverMessage.createdAt,
      user: {
        _id: serverMessage.userId,
        name: 'PLACEHOLDER',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }

    // console.log('mapServerMsg UI res is ' + JSON.stringify(res, null, 4))
    return res
  }

  const onSend = useCallback((newMessage = []) => {
    console.log('iosm messages is ' + JSON.stringify(newMessage, null, 4))
    const formattedMessage = {
      // database properties
      message: newMessage[0].text,
      userId: userId,
      room: groupId,

      // UI properties
      _id: newMessage._id,
      text: newMessage[0].text,
      createdAt: new Date(),
      user: {
        _id: userId,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
    socket.emit('message', formattedMessage)

    console.log('Edward called socket.emit')
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
      }}
    />
  )
}
