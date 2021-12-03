import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { formatDate } from '../utils/DateUtils'

export default function LogMessage({ message, user, date, assetName }) {
  const formattedDate = formatDate(date)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>{message}</Text>
        {assetName && <Text style={styles.assetNameBadge}>{assetName}</Text>}
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
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
  user: {
    fontStyle: 'italic',
  },
  assetNameBadge: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingVertical: 3,
    paddingHorizontal: 6,
    fontSize: 16,
  },
})
