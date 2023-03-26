import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function Register() {
  const {navigate} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Privacy Policy"
        onPress={() => navigate('PrivacyPolicy')}
      />
      <Button.Primary
        containerClassName="mt-2"
        title="Terms and Conditions"
        onPress={() => navigate('TermsAndConditions')}
      />
      <Button.Primary
        containerClassName="mt-2"
        title="Verify your account"
        onPress={() => navigate('RegisterVerification')}
      />
      <Button.Primary
        containerClassName="mt-2"
        title="Login"
        onPress={() => navigate('Login')}
      />
    </Page.Finite>
  );
}
