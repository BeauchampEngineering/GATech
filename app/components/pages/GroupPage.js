import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'
import GroupsListItem from '../GroupsListItem'

const GroupPage = () => {
  useEffect(() => {
    const usersGroupsEndpoint = endpoints.GET_USERS_GROUPS.replace(
      ':userId',
      GLOBAL.userId
    )
    axios
      .get(usersGroupsEndpoint)
      .then((response) => {
        setGroups(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [groups, setGroups] = useState([])

  return (
    <View>
      <Text style={styles.title}>Your Groups</Text>
      <FlatList
        data={groups}
        renderItem={({ item }) => {
          return (
            <GroupsListItem
              title={item.name}
              numMembers={`${item.users.length} members`}
              showArrow={true}
              groupId={item.id}
            />
          )
        }}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default GroupPage
