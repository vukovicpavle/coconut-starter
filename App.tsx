import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/hooks/useTheme';
import RootNavigator from './src/navigation/RootNavigator';
import StatusBar from './src/views/components/StatusBar';
import Styled from './src/views/components/Styled';

function withContext(Component: React.FC) {
  return function WrapperComponent() {
    return (
      <SafeAreaProvider>
        <ThemeProvider>
          <Component />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  };
}

function App() {
  LogBox.ignoreAllLogs();

  return (
    <>
      <StatusBar />

      <Styled.SafeAreaView className="flex-1">
        <RootNavigator />
      </Styled.SafeAreaView>
    </>
  );
}

export default withContext(App);
