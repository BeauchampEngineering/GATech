import React, { useState,useEffect } from 'react'
import { View, StyleSheet, Text,FlatList, } from 'react-native'
import endpoints from '../../connections/endpoints'
import GLOBAL from '../../state/global'
import LogMessage from '../LogMessage'


const HomePage = () => {
  const userId = GLOBAL.userId
  const streamEndpoint = endpoints.STREAM.replace(':userID',userId)
  const axios = require('axios')
  const [streamData, setStreamData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [refresh, setrefresh] = useState(false)

this.state = { 
    isFetching: false,
}
  useEffect(() => {
    stream()
  },[])
  function stream() {
    axios
      .get(streamEndpoint)
      .then((response) => response.data)
      .then((data) => {
        setStreamData(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }
  onRefresh = () => {
    stream()
    setrefresh(false)
  }
  return (
    <View style={styles.container}>
      {console.log(streamData)}
      <Text>Home page</Text>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
      <FlatList
        style={styles.flatList}
        //ListHeaderComponent={<SingleAssetHeader image={image} name={name} />}
        ListFooterComponent={<View style={styles.footer}></View>}
        data={streamData}
        refreshing= {refresh}
        onRefresh={() => this.onRefresh()}
        renderItem={({ item }) => {
          return (
            <LogMessage
              message={item.message}
              user={item.userId}
              date={item.updatedAt}
            />
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
  },})

export default HomePage
