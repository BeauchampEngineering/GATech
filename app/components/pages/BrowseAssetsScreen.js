import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AssetListItem from '../AssetListItem'
import colors from '../../config/colors'
import SingleAsset from './SingleAsset'

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
  const [showBrowseScreen, setShowBrowseScreen] = useState(true)
  return (
    <View style={styles.container}>
      {showBrowseScreen && (
        <FlatList
          data={assets}
          renderItem={({ item }) => {
            return (
              <AssetListItem
                name={item.name}
                date={item.date}
                image={item.image}
                onPress={() => setShowBrowseScreen(false)}
              />
            )
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
        ></FlatList>
      )}

      {!showBrowseScreen && (
        <SingleAsset
          goBackToBrowseAssets={() => {
            setShowBrowseScreen(true)
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
})
