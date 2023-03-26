import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Onboarding from '../views/pages/Onboarding';

export default function OnboardingNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Onboarding',
          component: Onboarding,
          options: {title: 'Welcome aboard!'},
        },
      ]}
    />
  );
}
