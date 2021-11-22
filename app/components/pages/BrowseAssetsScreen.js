import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AssetListItem from '../AssetListItem'
import colors from '../../config/colors'
import {SearchBar } from "react-native-elements";
import SingleAsset from './SingleAsset'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/core'
import routes from '../../navigation/routes'
import endpoints from '../../connections/endpoints'
const axios = require('axios')

const Stack = createNativeStackNavigator()

export default function BrowseAssetsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setfilteredData] = useState([])
  
  function onSearch(text) {
    setSearch(text)
    setfilteredData(filterAssets(text))
  }
  
  function filterAssets(text) {
    return data.filter(function(e) {
      return e.name.includes(String(text).toLowerCase())
    });
  }

  useEffect(() => {
    const getAssestsEndPoint = endpoints.GET_ASSETS
    axios
      .get(getAssestsEndPoint)
      .then((response) => response.data)
      .then((data) => {setData(data)
        setfilteredData(data)})
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={search}
          onChangeText={(text) => onSearch(text)}
        />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        
        <FlatList
          data={filteredData}
          renderItem={({ item }) => {
            return (
              <AssetListItem
                name={item.name}
                date={item.updatedAt}
                image={require('../../assets/machine.jpg')}
                onPress={() =>
                  navigation.navigate(routes.SINGLE_ASSET, {
                    ...item,
                    image: require('../../assets/machine.jpg'),
                  })
                }
              />
            )
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
        ></FlatList>
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
