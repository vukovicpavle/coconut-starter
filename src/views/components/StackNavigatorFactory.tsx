import {useTheme as useNavigationTheme} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import useTheme from '../../hooks/useTheme';

const Stack = createNativeStackNavigator();

type Route = {
  name: string;
  component: React.FC<NativeStackScreenProps<any, any>>;
  options?: NativeStackNavigationOptions;
};

type Props = {
  routes: Route[];
  options?: NativeStackNavigationOptions;
};

export default function StackNavigatorFactory({routes, options}: Props) {
  const {colorScheme} = useTheme();
  const {colors} = useNavigationTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS === 'ios',
        headerBlurEffect: Platform.OS === 'ios' ? colorScheme : undefined,
        headerLargeStyle: {
          backgroundColor: colors.background,
        },
        ...options,
      }}>
      {routes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}
