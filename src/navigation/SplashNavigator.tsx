import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Splash from '../views/pages/Splash';

export default function SplashNavigator() {
  return (
    <StackNavigatorFactory
      options={{headerShown: false}}
      routes={[
        {
          name: 'Splash',
          component: Splash,
        },
      ]}
    />
  );
}
