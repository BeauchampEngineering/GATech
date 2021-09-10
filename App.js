import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TabNavigation from './components/TabNavigation'
import Header from './components/Header'

export default function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
