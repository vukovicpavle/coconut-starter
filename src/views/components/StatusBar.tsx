import React from 'react';
import {Platform, StatusBar as StatusBarNative} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';
import Styled from './Styled';
const colors = require('../../../colors');

export default function StatusBar() {
  const {colorScheme} = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const color = Platform.select({
    ios: colorScheme === 'dark' ? colors.neutral[900] : colors.neutral[100],
    android: colorScheme === 'dark' ? colors.black : colors.white,
  });

  return (
    <>
      <StatusBarNative
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={color}
      />

      {Platform.OS === 'ios' && (
        <Styled.View
          style={{
            height: safeAreaInsets.top,
            backgroundColor: color,
          }}
        />
      )}
    </>
  );
}
