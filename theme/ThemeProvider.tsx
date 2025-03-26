import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, Text, Button, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Define types for the theme
type Theme = 'light' | 'dark';

interface ThemeStyles {
  container: StyleProp<ViewStyle>;
  reverseContainer: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
  reverseText: StyleProp<TextStyle>;
  titleText: StyleProp<TextStyle>;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  themeStyles: ThemeStyles;
}

// Create a Theme Context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Dynamically assign styles based on the current theme
  const themeStyles: ThemeStyles =
    theme === 'light'
      ? {
          container: styles.lightContainer,
          reverseContainer: styles.darkContainer,
          text: { ...styles.text, ...styles.lightText, fontFamily: 'FiraSans_400Regular' },
          titleText: { ...styles.text, ...styles.lightText, fontFamily: 'FiraSans_700Regular' },
          reverseText: {...styles.darkText, fontFamily: 'FiraSans_400Regular' }
        }
      : {
          container: styles.darkContainer,
          reverseContainer: styles.lightContainer,
          text: { ...styles.darkText, fontFamily: 'FiraSans_400Regular' },
          reverseText: {...styles.lightText, fontFamily: 'FiraSans_400Regular' },
          titleText: { ...styles.text, ...styles.darkText, fontFamily: 'FiraSans_700Regular' },
        };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Light and Dark theme styles
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 18
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  lightText: {
    color: '#222'
  },
  darkContainer: {
    backgroundColor: '#222',
  },
  darkText: {
    color: '#ffffff',
  }
});
