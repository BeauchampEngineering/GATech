import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Image,
  FlatList,
} from 'react-native'
import SingleAssetHeader from '../SingleAssetHeader'
import LogEntryModal from '../LogEntryModal'
import LogMessage from '../LogMessage'
import axios from 'axios'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'

export default function SingleAsset({ route }) {
  const { id, name, date, image } = route.params
  const [logData, setLogData] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const userId = GLOBAL.userId
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
        .then((response) => {
          setLogData((oldArray) => [
            ...oldArray,
            {
              id: response.data.id,
              message: response.data.message,
              user: {
                email: GLOBAL.userEmail,
              },
              userId: response.data.userId,
              updatedAt: response.data.updatedAt,
            },
          ])
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    axios
      .get(logsEndpoint)
      .then((response) => {
        setLogData(response.data)
      })
      .catch((err) => console.log('Error ' + err))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
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
      <FlatList
        style={styles.flatList}
        ListHeaderComponent={<SingleAssetHeader image={image} name={name} />}
        ListFooterComponent={<View style={styles.footer}></View>}
        data={logData}
        renderItem={({ item }) => {
          return (
            <LogMessage
              message={item.message}
              user={item.user.email}
              date={item.updatedAt}
            />
          )
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
  footer: {
    paddingBottom: 10,
  },
})
