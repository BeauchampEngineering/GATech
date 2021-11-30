import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function SingleAssetHeader({ name, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.previousLogs}>Previous Logs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'center',
  },
  detailsContainer: {
    marginTop: 5,
  },
  name: {
    fontSize: 20,
  },
  date: {
    fontSize: 16,
  },
  previousLogs: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
  },
})
