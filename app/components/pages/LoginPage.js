import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../forms/LoginForm'
import { StyleSheet } from 'react-native'

const LoginPage = ({ navigation }) => {
  return (
    <View style={newpage.container}>
      <Text style={newpage.title}>PM</Text>
      <LoginForm />
    </View>
  )
}
const newpage = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
})

export default LoginPage
