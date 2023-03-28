import React, {createElement, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../colors';
import useTheme from '../../hooks/useTheme';
import Button from './Button';
import {ControlProps, Controls} from './FormFactory';
import Styled from './Styled';

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
            <Styled.Text className="text-red-700 dark:text-red-300 text-base font-bold">
              {' *'}
            </Styled.Text>
          )}
        </Styled.View>
      )}
      <Styled.View className="flex flex-row h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 items-center">
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

function Submit(props: ControlProps) {
  function handleSubmit() {
    props.onSubmit(props.values);
  }

  return (
    <Button.Primary
      containerClassName="mb-4"
      title={props.label as string}
      onPress={handleSubmit}
    />
  );
}

function Custom(props: ControlProps) {
  if (!props.component) {
    return null;
  }
  // Render component from props.custom.component and pass it props
  return createElement(props.component, props);
}

const controls: Controls = {
  text: Text,
  password: Password,
  email: Email,
  submit: Submit,
  custom: Custom,
};

export default controls;
