import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>facebook</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={(params) => {}}>
          <Ionicons style={styles.icon} name='search' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(params) => {}}>
          <Ionicons style={styles.icon} name='settings-outline' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30, // this is temporary. todo-sprint-1: fix me
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.blue,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 5,
  },
})
