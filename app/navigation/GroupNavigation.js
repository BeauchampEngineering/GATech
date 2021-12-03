import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import GroupMemebers from '../components/pages/GroupMemebers'
import GroupPage from '../components/pages/GroupPage'
import GM2 from '../components/pages/GM2'
import routes from './routes'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

export default function GroupNavigation() {
  return (
    <Stack.Navigator
      
    >
      <Stack.Screen name='Users Groups' component={GroupPage} options={{header : (props) => <Header title = "Groups" />, headerTitleAlign: "center"}}/>
      <Stack.Screen name='GroupMembers' component={GroupMemebers} />
      <Stack.Screen name={routes.GROUP_MESSAGING} component={GM2} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
