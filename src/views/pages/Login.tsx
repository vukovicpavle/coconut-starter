import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Form from '../components/Form';
import Page from '../components/Page';

export default function Login() {
  const {reset, navigate} = useNavigator();

  function handleSubmit(values: any) {
    console.log(values);
    reset('MainNavigator');
  }

  return (
    <Page.Infinite>
      <Form
        fields={[
          {
            control: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
          },
          {
            control: 'password',
            name: 'password',
            label: 'Password',
            helpText:
              'Your password must be a minimum of 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.',
            placeholder: 'Enter your password',
          },
          {
            control: 'button',
            name: 'forgotPasswordLink',
            label: 'Forgot password?',
            containerClassName: 'self-end',
            custom: {
              type: 'link',
              onPress: () => {
                navigate('ForgotPassword');
              },
            },
          },
          {
            control: 'button',
            name: 'submit',
            label: 'Login',
            custom: {
              type: 'primary',
              onPress: (values: any) => {
                handleSubmit(values);
              },
            },
          },
          {
            control: 'button',
            name: 'registerLink',
            label: 'Register',
            custom: {
              type: 'secondary',
              onPress: () => {
                navigate('Register');
              },
            },
          },
        ]}
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={handleSubmit}
      />
    </Page.Infinite>
  );
}
