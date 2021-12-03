import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import BrowseAssetsScreen from '../components/pages/BrowseAssetsScreen'
import SingleAsset from '../components/pages/SingleAsset'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

export default function AssetsNavigation() {
  return (

      <Stack.Navigator
    >
      <Stack.Screen name='Browse Assets' component={BrowseAssetsScreen} 
          options={{header : (props) => <Header title = "Assets" />, headerTitleAlign: "center"}}/>
      <Stack.Screen name='SingleAsset' component={SingleAsset} />
      </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})
