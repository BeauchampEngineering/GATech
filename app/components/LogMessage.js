import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function LogMessage({ message }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    elevation: 6,
    marginBottom: 3,
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: 18,
  },
})
