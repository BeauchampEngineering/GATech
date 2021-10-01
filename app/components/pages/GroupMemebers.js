import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import GroupsListItem from '../GroupsListItem'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'

export default function GroupMemebers({ route }) {
  const groupId = route.params.groupId
  useEffect(() => {
    const groupMemebersEndpoint = endpoints.GET_USERS_IN_GROUP.replace(
      ':userId',
      GLOBAL.userId
    ).replace(':groupId', groupId)
    axios
      .get(groupMemebersEndpoint)
      .then((response) => {
        setGroupMemebrs(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [groupMembers, setGroupMemebrs] = useState([])

  return (
    <View>
      <Text style={styles.title}>Group Members</Text>
      <FlatList
        data={groupMembers}
        keyExtractor={(person) => person.id.toString()}
        renderItem={({ item }) => {
          return <GroupsListItem title={item.email} />
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
