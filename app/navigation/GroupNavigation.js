import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import GroupMemebers from '../components/pages/GroupMemebers'
import GroupPage from '../components/pages/GroupPage'
import GM2 from '../components/pages/GM2'
import routes from './routes'

const Stack = createNativeStackNavigator()

export default function GroupNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='UsersGroups' component={GroupPage} />
      <Stack.Screen name='GroupMembers' component={GroupMemebers} />
      <Stack.Screen name={routes.GROUP_MESSAGING} component={GM2} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
