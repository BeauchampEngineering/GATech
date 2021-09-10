import React from 'react'
import { View, Text } from 'react-native'
import { useStyles } from '../../contexts/StyleContext'
import LoginForm from '../forms/LoginForm'
import { StyleSheet } from 'react-native'

const LoginPage = () => {
  const { page } = useStyles()

  return (
    <View style={newpage.container}>
      <View style={newpage.subContainer}>
        <Text style={newpage.title}>PM</Text>
      </View>
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
    marginTop: 100,
    width: '100%',
  },

  subContainer: {
    padding: 100,
  },
})

export default LoginPage
