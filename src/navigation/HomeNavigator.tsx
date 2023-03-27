import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Home from '../views/pages/Home';

export default function HomeNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Home',
          component: Home,
          options: {
            headerLargeTitle: true,
          },
        },
      ]}
    />
  );
}
