import React from 'react';
import useNavigator from '../../hooks/useNavigator';
import Button from '../components/Button';
import Page from '../components/Page';

export default function Introduction() {
  const {reset} = useNavigator();

  return (
    <Page.Finite>
      <Button.Primary
        title="Go to login"
        onPress={() => reset('AuthNavigator')}
      />
    </Page.Finite>
  );
}
