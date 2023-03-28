import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import colors from '../../../colors';
import TabBarBackground from './TabBarBackground';

const Tab = createBottomTabNavigator();

type Route = {
  name: string;
  component: React.FC<BottomTabScreenProps<any, any>>;
  options?: BottomTabNavigationOptions;
};

type Props = {
  routes: Route[];
  options?: BottomTabNavigationOptions;
};

export default function TabNavigatorFactory({routes, options}: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.neutral[500],
        tabBarStyle:
          Platform.OS === 'ios'
            ? {
                backgroundColor: 'transparent',
                position: 'absolute',
              }
            : undefined,
        tabBarBackground: Platform.OS === 'ios' ? TabBarBackground : undefined,
        ...options,
      }}>
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  );
}
