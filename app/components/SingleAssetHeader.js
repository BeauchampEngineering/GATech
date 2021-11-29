import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function SingleAssetHeader({ id, name, date, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.previousLogs}>Previous Logs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'center',
  },
  detailsContainer: {
    marginTop: 20,
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
