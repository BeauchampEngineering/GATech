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

const logData = [
  {
    id: 1,
    message: 'temporary message',
  },
]

const newLogEntry = () => {
  console.log('new entry')
}

export default function SingleAsset() {
  const [logData, setLogData] = useState(logData)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Text>Single Asset</Text>
      <Button
        onPress={(params) => {
          setModalVisible(!modalVisible)
        }}
        title='Add Entry'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <LogEntryModal
          doneAction={() => {
            setModalVisible(false)
          }}
        />
      </Modal>

      <LogMessage title='Log Message title' subtitle='log message subtitle' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
})
