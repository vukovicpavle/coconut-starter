import React from 'react';
import {useTheme} from '../../hooks/useTheme';
import Button from '../components/Button';
import Page from '../components/Page';
import Text from '../components/Text';

export default function Settings() {
  const {setColorScheme} = useTheme();

  return (
    <Page.Infinite>
      <Text.Paragraph>
        This is the settings page. You can change the color scheme here.
      </Text.Paragraph>

      <Button.Primary
        title="Light"
        onPress={() => setColorScheme('light')}
        containerClassName="mt-2"
      />
      <Button.Primary
        title="Dark"
        onPress={() => setColorScheme('dark')}
        containerClassName="mt-2"
      />
    </Page.Infinite>
  );
}
