import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Header'
import TabNavigation from '../TabNavigation'
import HomePage from './HomePage'

export default function BasePage() {
  return (
    <View style={styles.container}>
      <Header />
      <TabNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
