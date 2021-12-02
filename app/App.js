

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './navigation/AuthNavigation'
import AppNavigation from './navigation/AppNavigation'
import Screen from './components/pages/Screen'
import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import endpoints from '../app/connections/endpoints.js'
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios'


const Stack = createNativeStackNavigator()

const App = () => {

  var socket
  useEffect(() => {
    // console.log("useEffect for the app")
    socket = io(endpoints.BASE_URL)
    axios
      .get(endpoints.GET_ASSETS)
      .then((resp) => {
        // console.log(resp.data)
        Array.from(resp.data).forEach(element => {
        // console.log(element)
        socket.emit('join-asset', element["id"])
      });})
    socket.on("fault", (m) => {
      // console.log(m)
      showMessage({
        message: m,
        type: "info",
        hideOnPress: true,
        backgroundColor: "#3256a8",
      });
    })
    socket.on("fix", (m) => {
      // console.log(m)
      showMessage({
        message: m,
        type: "info",
        hideOnPress: true,
        backgroundColor: "#3256a8",
      });
    })
  }, [socket])
  return (
    <Screen>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='AuthNavigation' component={AuthNavigation} />
          <Stack.Screen name='AppNavigation' component={AppNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Screen>
  )
}

export default App
