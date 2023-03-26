import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function Onboarding() {
  const {reset} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Start using the app"
        onPress={() => reset('MainNavigator')}
      />
    </Page.Finite>
  );
}
