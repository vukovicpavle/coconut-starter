import React, {PropsWithChildren} from 'react';
import {Animated} from 'react-native';
import Styled from './Styled';

function Pulse({className, children}: PropsWithChildren<{className?: string}>) {
  const pulse = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Styled.Animated.View
      style={{
        transform: [{scale: pulse}],
      }}
      className={className}>
      {children}
    </Styled.Animated.View>
  );
}

const Animation = {
  Pulse,
};

export default Animation;
