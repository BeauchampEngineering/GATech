import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
} from 'react-native'
import { Button } from 'react-native-elements'
import colors from '../config/colors'

export default function LogEntryModal({ doneAction, cancelAction }) {
  const [messageText, setMessageText] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter New Log Message</Text>
      <TextInput
        placeholder='New Entry'
        multiline={true}
        textAlignVertical='top'
        numberOfLines={10}
        onChangeText={(text) => {
          setMessageText(text)
        }}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={cancelAction}>
          <Text style={styles.text}>Cancel</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            doneAction(messageText)
          }}
        >
          <Text style={styles.text}>Save</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighterGrey,
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 3,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
})
