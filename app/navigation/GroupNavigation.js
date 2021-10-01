import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import BrowseAssetsScreen from '../components/pages/BrowseAssetsScreen'
import GroupMemebers from '../components/pages/GroupMemebers'
import GroupPage from '../components/pages/GroupPage'
import SingleAsset from '../components/pages/SingleAsset'

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
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
