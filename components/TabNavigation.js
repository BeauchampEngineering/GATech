import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Tab, TabView } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import BrowseAssetsScreen from '../screens/BrowseAssetsScreen'
import GroupScreen from '../screens/GroupScreen'

const tabIconSize = 25

export default function TabNavigation() {
  const [index, setIndex] = useState(0)
  return (
    <View style={styles.container}>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item icon={<Ionicons name='home' size={tabIconSize} />} />
        <Tab.Item
          icon={
            <MaterialCommunityIcons name='screwdriver' size={tabIconSize} />
          }
        />
        <Tab.Item icon={<Ionicons name='people' size={tabIconSize} />} />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <HomeScreen />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'grey', width: '100%' }}>
          <BrowseAssetsScreen />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <GroupScreen />
        </TabView.Item>
      </TabView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
