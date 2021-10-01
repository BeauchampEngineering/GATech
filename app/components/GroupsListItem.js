import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { Ionicons } from '@expo/vector-icons'

const iconSize = 25

export default function GroupsListItem({ title, numMembers }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSideContainer}>
        <View
          style={[
            styles.iconContainer,
            {
              width: iconSize * 2,
              height: iconSize * 2,
              borderRadius: iconSize,
            },
          ]}
        >
          <Ionicons name='people' size={iconSize} style={styles.iconStyle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.numMembersText}>{numMembers}</Text>
        </View>
      </View>
      <Ionicons name='arrow-forward' size={iconSize} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  leftSideContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lighterGrey,
  },
  textContainer: {
    marginLeft: 20,
  },
  titleText: {
    fontSize: 20,
  },
})
