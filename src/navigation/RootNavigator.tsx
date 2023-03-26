import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import AuthNavigator from './AuthNavigator';
import IntroductionNavigator from './IntroductionNavigator';
import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import SplashNavigator from './SplashNavigator';

export default function RootNavigator() {
  const {navigationTheme} = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigatorFactory
        options={{headerShown: false}}
        routes={[
          {
            name: 'SplashNavigator',
            component: SplashNavigator,
          },
          {
            name: 'IntroductionNavigator',
            component: IntroductionNavigator,
          },
          {
            name: 'OnboardingNavigator',
            component: OnboardingNavigator,
          },
          {
            name: 'AuthNavigator',
            component: AuthNavigator,
          },
          {
            name: 'MainNavigator',
            component: MainNavigator,
          },
        ]}
      />
    </NavigationContainer>
  );
}
