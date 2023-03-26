import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Introduction from '../views/pages/Introduction';

export default function IntroductionNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Introduction',
          component: Introduction,
          options: {title: 'Welcome!'},
        },
      ]}
    />
  );
}
