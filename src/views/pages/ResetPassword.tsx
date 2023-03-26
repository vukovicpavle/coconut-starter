import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function ResetPassword() {
  const {navigate} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Save new password"
        onPress={() => navigate('Login')}
      />
    </Page.Finite>
  );
}
