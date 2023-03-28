import React from 'react';
import Styled from './Styled';
import Text from './Text';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  containerClassName?: string;
  titleClassName?: string;
};

function Base({
  title,
  onPress,
  containerClassName,
  titleClassName,
}: ButtonProps) {
  return (
    <Styled.TouchableOpacity
      onPress={onPress}
      className={`rounded-full h-12 items-center justify-center ${containerClassName}`}>
      <Text.Paragraph textClassName={`text-center font-bold ${titleClassName}`}>
        {title}
      </Text.Paragraph>
    </Styled.TouchableOpacity>
  );
}

function Primary({
  title,
  onPress,
  containerClassName,
  titleClassName,
}: ButtonProps) {
  return (
    <Base
      title={title}
      onPress={onPress}
      containerClassName={`bg-primary-500 ${containerClassName}`}
      titleClassName={`text-white ${titleClassName}`}
    />
  );
}

function Secondary({
  title,
  onPress,
  containerClassName,
  titleClassName,
}: ButtonProps) {
  return (
    <Base
      title={title}
      onPress={onPress}
      containerClassName={`bg-secondary-500 ${containerClassName}`}
      titleClassName={`text-white ${titleClassName}`}
    />
  );
}

function Link({
  title,
  onPress,
  containerClassName,
  titleClassName,
}: ButtonProps) {
  return (
    <Base
      title={title}
      onPress={onPress}
      containerClassName={`bg-transparent ${containerClassName}`}
      titleClassName={`text-primary-500 ${titleClassName}`}
    />
  );
}

const Button = {
  Base,
  Primary,
  Secondary,
  Link,
};

export default Button;
