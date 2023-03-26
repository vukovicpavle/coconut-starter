import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigatorFactory from '../views/components/TabNavigatorFactory';
import HomeNavigator from './HomeNavigator';
import NotificationsNavigator from './NotificationsNavigator';
import ProjectsNavigator from './ProjectsNavigator';
import SearchNavigator from './SearchNavigator';
import SettingsNavigator from './SettingsNavigator';

const tabBarOptions: {[key: string]: BottomTabNavigationOptions} = {
  Home: {
    tabBarLabel: 'Home',
    tabBarIcon: ({color, size}) => (
      <Ionicons name="home-outline" color={color} size={size} />
    ),
  },
  Projects: {
    tabBarLabel: 'Projects',
    tabBarIcon: ({color, size}) => (
      <Ionicons name="folder-outline" color={color} size={size} />
    ),
  },
  Notifications: {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({color, size}) => (
      <Ionicons name="notifications-outline" color={color} size={size} />
    ),
  },
  Settings: {
    tabBarLabel: 'Settings',
    tabBarIcon: ({color, size}) => (
      <Ionicons name="settings-outline" color={color} size={size} />
    ),
  },
  Search: {
    tabBarLabel: 'Search',
    tabBarIcon: ({color, size}) => (
      <Ionicons name="search-outline" color={color} size={size} />
    ),
  },
};

export default function MainNavigator() {
  return (
    <TabNavigatorFactory
      routes={[
        {
          name: 'HomeNavigator',
          component: HomeNavigator,
          options: tabBarOptions.Home,
        },
        {
          name: 'ProjectsNavigator',
          component: ProjectsNavigator,
          options: tabBarOptions.Projects,
        },
        {
          name: 'NotificationsNavigator',
          component: NotificationsNavigator,
          options: tabBarOptions.Notifications,
        },
        {
          name: 'SettingsNavigator',
          component: SettingsNavigator,
          options: tabBarOptions.Settings,
        },
        {
          name: 'SearchNavigator',
          component: SearchNavigator,
          options: tabBarOptions.Search,
        },
      ]}
    />
  );
}
