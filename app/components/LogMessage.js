import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function LogMessage({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    top: 50,
    borderRadius: 5,
    elevation: 6,
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
