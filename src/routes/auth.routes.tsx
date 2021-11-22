import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Signin} from '../pages/Signin';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        }

      }}
    >
      <Screen 
        name='Signin'
        component={Signin}
      />

      <Screen 
        name='Home'
        component={Home}
      />

    </Navigator>
  )
}