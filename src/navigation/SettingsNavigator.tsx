import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Settings from '../views/pages/Settings';

export default function SettingsNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Settings',
          component: Settings,
          options: {
            headerLargeTitle: true,
          },
        },
      ]}
    />
  );
}
