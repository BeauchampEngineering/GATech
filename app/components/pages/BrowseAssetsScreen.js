import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AssetListItem from '../AssetListItem'
import colors from '../../config/colors'

const assets = [
  {
    id: 1,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 2,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 3,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 4,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 5,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
  {
    id: 6,
    name: 'Machine',
    date: '10-20-2020',
    image: require('../../assets/machine.jpg'),
  },
]

export default function BrowseAssetsScreen() {
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
