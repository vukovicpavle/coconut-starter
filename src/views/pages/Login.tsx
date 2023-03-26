import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function Login() {
  const {navigate, reset} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary title="Register" onPress={() => navigate('Register')} />
      <Button.Primary
        containerClassName="mt-2"
        title="Forgot password"
        onPress={() => navigate('ForgotPassword')}
      />
      <Button.Primary
        containerClassName="mt-2"
        title="Login"
        onPress={() => reset('MainNavigator')}
      />
    </Page.Finite>
  );
}
