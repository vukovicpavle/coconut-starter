import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {StyleSheet} from 'react-native';
import useTheme from '../../hooks/useTheme';

export default function TabBarBackground() {
  const {colorScheme} = useTheme();
  return <BlurView blurType={colorScheme} style={StyleSheet.absoluteFill} />;
}
