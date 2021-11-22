import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './navigation/AuthNavigation'
import AppNavigation from './navigation/AppNavigation'
import Screen from './components/pages/Screen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Screen>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='AuthNavigation' component={AuthNavigation} />
          <Stack.Screen name='AppNavigation' component={AppNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Screen>
  )
}

export default App
