import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function ForgotPasswordVerification() {
  const {navigate} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Reset your password"
        onPress={() => navigate('ResetPassword')}
      />
    </Page.Finite>
  );
}
