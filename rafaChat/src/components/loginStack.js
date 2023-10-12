import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import login from '../screens/onBoarding/login'

const homeStack = () => {
  return (
    <NavigationContainer>
        <Stack.NavigationContainer>
            <Stack.Screen name='loginScreen' component={login} />
        </Stack.NavigationContainer>
    </NavigationContainer>
  )
}

export default homeStack