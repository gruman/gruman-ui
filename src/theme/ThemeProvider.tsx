import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme, Theme } from './themes';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setCustomTheme: (customTheme: Partial<Theme>) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));

  const setCustomTheme = (customTheme: Partial<Theme>) => {
    setTheme({ ...theme, ...customTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
