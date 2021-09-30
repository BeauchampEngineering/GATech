import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Modal,
  Image,
  FlatList,
} from 'react-native'
import colors from '../../config/colors'
import LogEntryModal from '../LogEntryModal'
import LogMessage from '../LogMessage'
import axios from 'axios'
import endpoints from '../../connections/endpoints'

export default function SingleAsset({ route }) {
  const { id, name, date, image } = route.params
  const [logData, setLogData] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const userId = 1 // this needs to be changed
  const logsEndpoint = endpoints.LOGS.replace(':userId', userId).replace(
    ':assetId',
    id
  )

  const newLogEntry = (newMessage) => {
    if (newMessage !== '') {
      axios
        .post(logsEndpoint, {
          message: newMessage,
        })
        .then(() => {
          console.log('Log successful')
          setLogData((oldArray) => [
            ...oldArray,
            { id: 2, message: newMessage },
          ])
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    axios
      .get(logsEndpoint)
      .then((data) => {
        setLogData(data.data)
        data.data
      })
      .catch((err) => console.log('Error ' + err))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
          title='Add Entry'
          color='#841584'
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
      <FlatList
        data={logData}
        renderItem={({ item }) => {
          return <LogMessage title={item.message} subtitle={item.message} />
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
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
