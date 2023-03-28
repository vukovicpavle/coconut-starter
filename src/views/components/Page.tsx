import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
import React, {PropsWithChildren} from 'react';
import {Platform, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Styled from './Styled';

function Finite({
  style,
  className,
  children,
}: PropsWithChildren<{style?: StyleProp<ViewStyle>; className?: string}>) {
  return (
    <Styled.KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Styled.ScrollView
        className="flex-1 grow"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        contentInsetAdjustmentBehavior="automatic"
        scrollEnabled={false}>
        <Styled.View className={`p-4 flex-1 ${className}`} style={style}>
          {children}
        </Styled.View>
      </Styled.ScrollView>
    </Styled.KeyboardAvoidingView>
  );
}

function Infinite({
  style,
  contentContainerStyle,
  className,
  children,
}: PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  className?: string;
}>) {
  const contentStyle = StyleSheet.flatten([
    {
      padding: 16,
    },
    contentContainerStyle,
  ]);

  return (
    <Styled.KeyboardAvoidingView
      className="flex-1 grow flex-col"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <BottomTabBarHeightContext.Consumer>
        {tabBarHeight => (
          <Styled.ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={style}
            contentContainerStyle={[
              contentStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                paddingBottom:
                  Platform.OS === 'ios' && tabBarHeight
                    ? tabBarHeight + 16
                    : 16,
              },
            ]}
            className={`flex-1 ${className}`}>
            {children}
          </Styled.ScrollView>
        )}
      </BottomTabBarHeightContext.Consumer>
    </Styled.KeyboardAvoidingView>
  );
}

const Page = {
  Finite,
  Infinite,
};

export default Page;
