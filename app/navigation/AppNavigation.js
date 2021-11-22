import React from 'react'
import { StyleSheet, View } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomePage from '../components/pages/HomePage'
import GroupPage from '../components/pages/GroupPage'
import AssetsNavigation from './AssetsNavigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import routes from './routes'
import Header from '../components/Header'
import QRscanner from '../components/pages/QRscanner'
import GroupNavigation from './GroupNavigation'

const Tabs = createMaterialTopTabNavigator()
const iconSize = 25
export default function AppNavigation() {
  return (
    <View style={styles.container}>
      <Header />
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: (props) => {
            let iconName

            if (route.name == routes.HOME_PAGE) {
              iconName = 'home'
            } else if (route.name == routes.BROWSE_ASSETS) {
              iconName = 'screwdriver'
            } else if (route.name === routes.GROUPS) {
              iconName = 'account-group'
            } else {
              iconName = 'qrcode'
            }

            return (
              <View
                style={{
                  width: 100,
                }}
              >
                <MaterialCommunityIcons name={iconName} size={iconSize} />
              </View>
            )
          },
        })}
      >
        <Tabs.Screen name='Home' component={HomePage} />
        <Tabs.Screen name='AssetsNavigation' component={AssetsNavigation} />
        <Tabs.Screen name='Groups' component={GroupNavigation} />
        <Tabs.Screen name='QRscanner' component={QRscanner} />
      </Tabs.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
