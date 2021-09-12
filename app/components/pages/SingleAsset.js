import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native'
import colors from '../../config/colors'
import LogEntryModal from '../LogEntryModal'
import LogMessage from '../LogMessage'

const machineData = {
  name: 'My Machine',
  date: '10-20-2021',
  image: require('../../assets/machine.jpg'),
}

const initialData = [
  {
    id: 1,
    message: 'temporary message',
  },
]

// this is temporary - get rid of me
var idNum = 2

export default function SingleAsset() {
  const [logData, setLogData] = useState(initialData)
  const [modalVisible, setModalVisible] = useState(false)

  const newLogEntry = (message) => {
    if (message !== '') {
      setLogData((oldArray) => [...oldArray, { id: 2, message }])
      idNum += 1
    }
  }

  return (
    <View style={styles.container}>
      <Text>Single Asset</Text>
      <Button
        // onPress={(params) => {
        //   setModalVisible(!modalVisible)
        // }}
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
        title='Add Entry'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />

      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <LogEntryModal
          doneAction={(messageText) => {
            setModalVisible(false)
            newLogEntry(messageText)
          }}
          cancelAction={() => setModalVisible(false)}
        />
      </Modal>

      {logData.map((item) => (
        <LogMessage title={item.message} subtitle={item.message} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
})
