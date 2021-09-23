import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import routes from '../../navigation/routes'

const LoginForm = () => {
  const navigation = useNavigation()
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  const verifyLogin = (params) => {
    const verified = true
    verified
      ? navigation.navigate(routes.APP_NAVIGATION)
      : console.log('not verified')
  }

  return (
    <View style={newInput.form}>
      <View style={newInput.container}>
        <View style={newInput.border}>
          <TextInput
            style={newInput.box}
            value={email}
            placeholder='  Email'
            onChangeText={onChangeEmail}
          />
        </View>
      </View>
      <View style={newInput.container}>
        <View style={newInput.border}>
          <TextInput
            style={newInput.box}
            value={password}
            secureTextEntry={true}
            placeholder='  Password'
            onChangeText={onChangePassword}
          />
        </View>
      </View>
      <View style={newbutton.buttonContainer}>
        <TouchableOpacity style={newbutton.fill} onPress={verifyLogin}>
          <Text style={newbutton.text}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={otherbutton.buttonContainer}>
        <TouchableOpacity
          style={otherbutton.fill}
          onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
        >
          <Text style={otherbutton.text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={otherbutton.fill}>
          <Text style={otherbutton.text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const newInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: '90%',
    height: 56,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 2,
  },
  box: {
    flex: 1,
  },
})

const newbutton = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 34,
  },

  fill: {
    padding: 13,
    borderRadius: 7,
    backgroundColor: '#1e90ff',
    height: 45,
  },
  text: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const otherbutton = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
  },
  text: {
    color: '#1e90ff',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fill: {
    padding: 0,
    borderRadius: 7,
    backgroundColor: 'white',
    height: 30,
  },
})

export default LoginForm
