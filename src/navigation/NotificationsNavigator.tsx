import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Notifications from '../views/pages/Notifications';

export default function NotificationsNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Notifications',
          component: Notifications,
          options: {
            headerLargeTitle: true,
          },
        },
      ]}
    />
  );
}
