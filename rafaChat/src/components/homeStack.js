import React from 'react'
import homeScreen from '../screens/Home/homeScreen'
import { NavigationContainer } from '@react-navigation/native'

const homeStack = () => {
  return (
    <NavigationContainer>
        <Stack.NavigationContainer>
            <Stack.Screen name='homescreen' component={homeScreen} />
        </Stack.NavigationContainer>
    </NavigationContainer>
  )
}

export default homeStack