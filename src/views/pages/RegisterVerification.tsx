import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function RegisterVerification() {
  const {reset} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Finish registration"
        onPress={() => reset('OnboardingNavigator')}
      />
    </Page.Finite>
  );
}
