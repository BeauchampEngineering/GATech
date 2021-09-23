import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import BrowseAssetsScreen from '../components/pages/BrowseAssetsScreen'
import SingleAsset from '../components/pages/SingleAsset'

const Stack = createNativeStackNavigator()

export default function AssetsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='BrowseAssets' component={BrowseAssetsScreen} />
      <Stack.Screen name='SingleAsset' component={SingleAsset} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
