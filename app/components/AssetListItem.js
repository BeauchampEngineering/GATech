import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AssetListItem({ name, date, image, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 20,
  },
  date: {
    fontSize: 16,
  },
})
