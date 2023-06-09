import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../colors';
import useTheme from '../../hooks/useTheme';
import DefaultButton from './Button';
import {ControlProps, Controls} from './FormFactory';
import Styled from './Styled';
import DefaultText from './Text';

function Base(props: ControlProps) {
  const {
    name,
    label,
    placeholder,
    required,
    disabled,
    readonly,
    value,
    visible = true,
    error,
    helpText,
    textClassName,
    containerClassName,
    custom,
    onChange,
    onBlur,
  } = props;

  const {colorScheme} = useTheme();

  if (visible === false) {
    return null;
  }

  return (
    <Styled.View className={`flex flex-col mb-4 ${containerClassName}`}>
      {label && (
        <Styled.View className="flex flex-row mb-2">
          <Styled.Text className="text-neutral-900 dark:text-neutral-100 text-base font-bold">
            {label}
          </Styled.Text>
          {required && (
            <Styled.Text className="text-neutral-900 dark:text-neutral-100 text-base font-bold">
              {' *'}
            </Styled.Text>
          )}
        </Styled.View>
      )}
      <Styled.View
        className={`flex flex-row h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 items-center border
          ${disabled ? 'opacity-50' : 'opacity-100'}
          ${error ? 'border-red-500' : 'border-transparent'}
        `}>
        {custom?.prefix && (
          <Styled.View className="flex flex-row items-center h-full px-4">
            {custom?.prefix}
          </Styled.View>
        )}
        <Styled.TextInput
          className={`
            text-neutral-900 dark:text-neutral-100 flex-1 text-base h-full leading-[18px]
            ${custom?.prefix ? 'pl-0' : 'pl-4'} 
            ${custom?.suffix ? 'pr-0' : 'pr-4'} 
            ${textClassName}
          `}
          placeholder={placeholder}
          placeholderTextColor={
            colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[600]
          }
          editable={!readonly || !disabled}
          value={value}
          onChangeText={onChange(name)}
          onBlur={onBlur(name)}
          secureTextEntry={custom?.secureTextEntry}
        />
        {custom?.suffix && (
          <Styled.View className="flex flex-row items-center h-full px-4">
            {custom?.suffix}
          </Styled.View>
        )}
      </Styled.View>

      {helpText && (
        <Styled.Text className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
          {helpText as string}
        </Styled.Text>
      )}
      {error && (
        <Styled.Text className="text-red-500 text-sm mt-1">
          {error as string}
        </Styled.Text>
      )}
    </Styled.View>
  );
}

function Text(props: ControlProps) {
  return <Base {...props} />;
}

function Password(props: ControlProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Base
      {...props}
      custom={{
        prefix: (
          <Styled.Text className="text-neutral-900 dark:text-neutral-100">
            <Ionicons name="key" size={16} />
          </Styled.Text>
        ),
        suffix: (
          <Styled.TouchableOpacity
            className="-m-2 p-2"
            onPress={() => setVisible(!visible)}>
            <Styled.Text className="text-neutral-900 dark:text-neutral-100">
              <Ionicons name={visible ? 'eye-off' : 'eye'} size={16} />
            </Styled.Text>
          </Styled.TouchableOpacity>
        ),
        secureTextEntry: !visible,
      }}
    />
  );
}

function Email(props: ControlProps) {
  return (
    <Base
      {...props}
      custom={{
        prefix: (
          <Styled.Text className="text-neutral-900 dark:text-neutral-100">
            <Ionicons name="mail" size={16} />
          </Styled.Text>
        ),
      }}
    />
  );
}

function Button(props: ControlProps) {
  // Get the button type
  const type = props.custom?.type;

  // Button props
  const buttonProps = {
    title: props.label as string,
    containerClassName: `mb-4 ${props.containerClassName}`,
    onPress: () => {
      props.custom?.onPress(props.values);
    },
  };

  switch (type) {
    case 'primary':
      return <DefaultButton.Primary {...buttonProps} />;
    case 'secondary':
      return <DefaultButton.Secondary {...buttonProps} />;
    case 'link':
      return <DefaultButton.Link {...buttonProps} />;
    default:
      return <DefaultButton.Primary {...buttonProps} />;
  }
}

function LabeledButton(props: ControlProps) {
  // Get the button type
  const type = props.custom?.type;

  // Button props
  const buttonProps = {
    title: props.label as string,
    containerClassName: props.custom?.buttonClassName,
    onPress: () => {
      props.custom?.onPress(props.values);
    },
  };

  switch (type) {
    case 'primary':
      return (
        <Styled.View
          className={`flex flex-row items-center justify-center mb-4 ${props.containerClassName}`}>
          <DefaultText.Paragraph textClassName="mr-2">
            {props.custom?.label}
          </DefaultText.Paragraph>
          <DefaultButton.Primary {...buttonProps} />
        </Styled.View>
      );
    case 'secondary':
      return (
        <Styled.View
          className={`flex flex-row items-center justify-center mb-4 ${props.containerClassName}`}>
          <DefaultText.Paragraph textClassName="mr-2">
            {props.custom?.label}
          </DefaultText.Paragraph>
          <DefaultButton.Secondary {...buttonProps} />
        </Styled.View>
      );
    case 'link':
      return (
        <Styled.View
          className={`flex flex-row items-center justify-center mb-4 ${props.containerClassName}`}>
          <DefaultText.Paragraph textClassName="mr-2">
            {props.custom?.label}
          </DefaultText.Paragraph>
          <DefaultButton.Link {...buttonProps} />
        </Styled.View>
      );
    default:
      return (
        <Styled.View
          className={`flex flex-row items-center justify-center mb-4 ${props.containerClassName}`}>
          <DefaultText.Paragraph textClassName="mr-2">
            {props.custom?.label}
          </DefaultText.Paragraph>
          <DefaultButton.Primary {...buttonProps} />
        </Styled.View>
      );
  }
}

const controls: Controls = {
  text: Text,
  password: Password,
  email: Email,
  button: Button,
  labeledButton: LabeledButton,
};

export default controls;
