import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { Button } from 'react-native-elements'

export default function LogEntryModal({ doneAction }) {
  return (
    <View style={styles.container}>
      <Text>Here is my Modal</Text>
      <Button title='Save' onPress={doneAction} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
})
