import React, {useEffect} from 'react';
import useNavigator from '../../hooks/useNavigator';
import Animation from '../components/Animation';
import Page from '../components/Page';
import Text from '../components/Text';

export default function Splash() {
  const {reset} = useNavigator();

  useEffect(() => {
    setTimeout(() => {
      reset('IntroductionNavigator');
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page.Finite className="flex items-center justify-center">
      <Animation.Pulse>
        <Text.Heading1>Splash</Text.Heading1>
      </Animation.Pulse>
    </Page.Finite>
  );
}
