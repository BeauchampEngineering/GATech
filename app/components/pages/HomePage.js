import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../Header'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header title = "Portal Manager" />
      <Text>Home page</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomePage
