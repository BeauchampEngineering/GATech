import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import routes from '../../navigation/routes'
import axios from 'axios'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'

const LoginForm = () => {
  const navigation = useNavigation()
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const clearErrorMessage = () => {
    setErrorMessage('')
  }

  const verifyLogin = (email, password) => {
    const authLoginEndpoint = endpoints.AUTHENTICATE_LOGIN

    setLoading(true)
    axios
      .post(authLoginEndpoint, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoading(false)
        GLOBAL.userId = response.data.id
        GLOBAL.userEmail = email
        // this is only called when authentication is successful
        navigation.navigate(routes.APP_NAVIGATION, {
          userId: response.data.id,
        })
      })
      .catch(function (error) {
        setLoading(false)
        error.response.data.length > 0
          ? setErrorMessage(error.response.data[0].message)
          : setErrorMessage('Invalid Credentials')
      })
  }

  return (
    <View style={newInput.form}>
      <View style={newInput.container}>
        <View style={newInput.border}>
          <TextInput
            style={newInput.box}
            value={email}
            placeholder='  Email'
            onChangeText={(text) => {
              onChangeEmail(text)
              clearErrorMessage()
            }}
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
            onChangeText={(text) => {
              onChangePassword(text)
              clearErrorMessage()
            }}
          />
        </View>
      </View>
      <Text style={newInput.errorMessage}>{errorMessage}</Text>
      {loading && <Text>Loading</Text>}
      <View style={newbutton.buttonContainer}>
        <TouchableOpacity
          style={newbutton.fill}
          onPress={() => verifyLogin(email, password)}
        >
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
      </View>
      <View style={otherbutton.buttonContainer}>
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
  errorMessage: {
    color: '#cc0000',
    fontSize: 16,
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
    paddingBottom: 5,
  },
  text: {
    color: '#1e90ff',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fill: {
    padding: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    height: 30,
  },
})

export default LoginForm
