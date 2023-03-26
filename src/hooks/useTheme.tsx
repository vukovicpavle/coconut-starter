import {Theme} from '@react-navigation/native';
import {useColorScheme} from 'nativewind';
import {
  ColorSchemeName,
  ColorSchemeSystem,
} from 'nativewind/dist/style-sheet/color-scheme';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react';
import Storage from '../services/Storage';
const colors = require('../../colors');

const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.primary[500],
    background: colors.neutral[100],
    card: colors.white,
    text: colors.neutral[900],
    border: colors.neutral[300],
    notification: colors.pink[500],
  },
};

const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.primary[500],
    background: colors.neutral[900],
    card: colors.black,
    text: colors.neutral[100],
    border: colors.neutral[700],
    notification: colors.pink[500],
  },
};

type ThemeContextType = {
  colorScheme: ColorSchemeName;
  setColorScheme: (colorSchemeSystem: ColorSchemeSystem) => void;
  toggleColorScheme: () => void;
  navigationTheme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  setColorScheme: () => {},
  toggleColorScheme: () => {},
  navigationTheme: lightTheme,
});

export const ThemeProvider = ({children}: PropsWithChildren<{}>) => {
  const {colorScheme, toggleColorScheme, setColorScheme} = useColorScheme();

  useEffect(() => {
    async function getInitialColorScheme() {
      const storedColorScheme = await Storage.get<ColorSchemeName>(
        'colorScheme',
      );

      if (storedColorScheme) {
        setColorScheme(storedColorScheme);
      } else {
        setColorScheme(colorScheme);
      }
    }

    getInitialColorScheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function storeColorScheme() {
      await Storage.set('colorScheme', colorScheme);
    }

    storeColorScheme();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        toggleColorScheme,
        navigationTheme: colorScheme === 'dark' ? darkTheme : lightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
