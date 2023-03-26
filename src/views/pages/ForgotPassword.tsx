import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function ForgotPassword() {
  const {navigate} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Verify your email"
        onPress={() => navigate('ForgotPasswordVerification')}
      />
    </Page.Finite>
  );
}
