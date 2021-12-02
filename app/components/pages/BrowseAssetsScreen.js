import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AssetListItem from '../AssetListItem'
import colors from '../../config/colors'
import { SearchBar } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../../navigation/routes'
import endpoints from '../../connections/endpoints'
import { formatDate } from '../../utils/DateUtils'
import axios from 'axios'
import GLOBAL from '../../state/global'

const Stack = createNativeStackNavigator()

export default function BrowseAssetsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filteredData, setfilteredData] = useState([])

  const userId = GLOBAL.userId

  function onSearch(text) {
    setSearch(text)
    const logsEndpoint = endpoints.SEARCH_ASSETS.replace(
      '{query}',
      String(text)
    )
    axios
      .get(logsEndpoint)
      .then((response) => response.data)
      .then((data) => {
        setfilteredData(data)
      })
  }

  useEffect(() => {
    const getUsersAssests = endpoints.GET_SPECIFIC_USERS_ASSETS.replace(
      ':userId',
      userId
    )
    axios
      .get(getUsersAssests)
      .then((response) => response.data)
      .then((data) => {
        setfilteredData(data)
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder='Search Here...'
        lightTheme
        round
        value={search}
        onChangeText={(text) => onSearch(text)}
      />
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          {filteredData.length == 0 ? (
            <Text>No Assets assinged to this User</Text>
          ) : (
            <FlatList
              data={filteredData}
              renderItem={({ item }) => {
                return (
                  <AssetListItem
                    name={item.name}
                    date={formatDate(item.updatedAt)}
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
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            ></FlatList>
          )}
        </View>
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
