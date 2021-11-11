import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/core'
import routes from '../navigation/routes'

const iconSize = 25

export default function GroupsListItem({
  title,
  numMembers,
  showArrow,
  groupId,
}) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContent}
        onPress={() => {
          console.log('on press')
          navigation.navigate(routes.GROUP_MEMBERS, {
            groupId: groupId,
          })
        }}
      >
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
            {numMembers !== null && (
              <Text style={styles.numMembersText}>{numMembers}</Text>
            )}
          </View>
        </View>

        {showArrow && <Ionicons name='arrow-forward' size={iconSize} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.GROUP_MESSAGING, {
            groupId: groupId,
          })
        }
      >
        <Text style={styles.messagingText}>Messaging</Text>
      </TouchableOpacity>
    </View>
  )
}

GroupsListItem.defaultProps = {
  showArrow: false,
  numMembers: null,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  messagingText: {
    fontSize: 16,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
})
