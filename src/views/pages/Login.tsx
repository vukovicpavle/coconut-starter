import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Form from '../components/Form';
import Page from '../components/Page';

function ForgotPasswordLink() {
  const {navigate} = useNavigator();

  return (
    <Button.Link
      containerClassName="mb-4 self-end"
      title="Forgot password?"
      onPress={() => navigate('ForgotPassword')}
    />
  );
}

function RegisterLink() {
  const {navigate} = useNavigator();

  return (
    <Button.Secondary
      containerClassName="mb-4"
      title="Register"
      onPress={() => navigate('Register')}
    />
  );
}

export default function Login() {
  const {reset} = useNavigator();

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
            control: 'custom',
            name: 'forgotPasswordLink',
            component: ForgotPasswordLink,
          },
          {
            control: 'submit',
            name: 'submit',
            label: 'Login',
          },
          {
            control: 'custom',
            name: 'registerLink',
            component: RegisterLink,
          },
        ]}
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={handleSubmit}
      />
      {/* <Button.Primary title="Register" onPress={() => navigate('Register')} />
      <Button.Primary
        containerClassName="mt-2"
        title="Forgot password"
        onPress={() => navigate('ForgotPassword')}
      />
      <Button.Primary
        containerClassName="mt-2"
        title="Login"
        onPress={() => reset('MainNavigator')}
      /> */}
    </Page.Infinite>
  );
}
