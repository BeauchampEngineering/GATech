import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AssetListItem from '../AssetListItem'
import colors from '../../config/colors'
import SingleAsset from './SingleAsset'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/core'
import routes from '../../navigation/routes'

const Stack = createNativeStackNavigator()

const assets = [
  {
    id: 1,
    name: 'Machine 1',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 2,
    name: 'Machine 2',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 3,
    name: 'Machine 3',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 4,
    name: 'Machine 4',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 5,
    name: 'Machine 5',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 6,
    name: 'Machine 6',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
]

export default function BrowseAssetsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={assets}
        renderItem={({ item }) => {
          return (
            <AssetListItem
              name={item.name}
              date={item.date}
              image={item.image}
              onPress={() => navigation.navigate(routes.SINGLE_ASSET, item)}
            />
          )
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
})
