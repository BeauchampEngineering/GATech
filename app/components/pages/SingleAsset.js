import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Modal,
  Image,
} from 'react-native'
import colors from '../../config/colors'
import LogEntryModal from '../LogEntryModal'
import LogMessage from '../LogMessage'

const machineData = {
  name: 'My Machine',
  date: '10-20-2021',
  image: require('../../assets/machine.jpg'),
}

const initialData = []

// this is temporary - get rid of me
var idNum = 2

export default function SingleAsset({ goBackToBrowseAssets }) {
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
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={machineData.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{machineData.name}</Text>
        <Text style={styles.date}>{machineData.date}</Text>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
          title='Add Entry'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
        <Button
          onPress={goBackToBrowseAssets}
          title='Go Back'
          color={colors.blue}
          accessibilityLabel='Learn more about this purple button'
        />
      </View>

      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <LogEntryModal
          doneAction={(messageText) => {
            setModalVisible(false)
            newLogEntry(messageText)
          }}
          cancelAction={() => setModalVisible(false)}
        />
      </Modal>
      <Text style={styles.previousLogs}>Previous Logs</Text>
      {logData.map((item) => (
        <LogMessage title={item.message} subtitle={item.message} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'center',
  },
  detailsContainer: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
  },
  date: {
    fontSize: 16,
  },
  previousLogs: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
  },
})