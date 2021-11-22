import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../components/pages/LoginPage'
import LogoutPage from '../components/pages/LogoutPage'
import ForgotPasswordPage from '../components/pages/ForgotPasswordPage'
import { View } from 'react-native'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='Logout' component={LogoutPage} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
