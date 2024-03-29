import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '../config/colors'


const Header = (props) => {
  const [title,setTitle] = useState("");
  useEffect(()=>{
    setTitle(props.title);
},[props.title]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={(params) => {}}>
          <Ionicons style={styles.icon} name='search' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(params) => {}}>
          <Ionicons style={styles.icon} name='settings-outline' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#2E6BDE",
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 5,
  },
})
export default Header
