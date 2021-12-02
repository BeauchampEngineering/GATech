import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'
import LogMessage from '../LogMessage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/core'
import routes from '../../navigation/routes'

const HomePage = () => {
  const userId = GLOBAL.userId
  const streamEndpoint = endpoints.STREAM.replace(':userID', userId)

  const [streamData, setStreamData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [refresh, setrefresh] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    stream()
  }, [])

  function stream() {
    axios
      .get(streamEndpoint)
      .then((response) => response.data)
      .then((data) => {
        setStreamData(data)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }
  const onRefresh = () => {
    stream()
    setrefresh(false)
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          ListFooterComponent={<View style={styles.footer}></View>}
          data={streamData}
          refreshing={refresh}
          onRefresh={() => onRefresh()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.SINGLE_ASSET, {
                    ...item.asset,
                    image: require('../../assets/machine.jpg'),
                  })
                }
              >
                <LogMessage
                  message={item.message}
                  user={item.user.email}
                  date={item.updatedAt}
                  assetName={item.asset.name}
                />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  footer: {
    paddingBottom: 10,
  },
})

export default HomePage
