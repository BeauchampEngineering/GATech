import React from 'react'
import { StyleSheet, View } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from '../components/pages/HomePage'
import GroupPage from '../components/pages/GroupPage'
import AssetsNavigation from './AssetsNavigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import routes from './routes'
import QRscanner from '../components/pages/QRscanner'
import GroupNavigation from './GroupNavigation'
import colors from '../config/colors'

const Tabs = createMaterialBottomTabNavigator()
const iconSize = 25
export default function AppNavigation() {
  return (
    <View style={styles.container}>
      <Tabs.Navigator
      activeColor="#2E6BDE"
      inactiveColor="#000000"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
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
                  width: 30,
                }}
              >
                <MaterialCommunityIcons name={iconName} size={iconSize} color ={color} />
              </View>
            )
          },
        })}
        barStyle={{ backgroundColor: '#FFFFFF' }}
        labeled={false}
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
    width: '100%',
    padding: 0,
    backgroundColor: colors.white,
  },
})
