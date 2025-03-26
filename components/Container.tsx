import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

const Container: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const { themeStyles } = useTheme();

  return (
    <ThemeProvider>
    <View style={[styles.container, themeStyles.container, style]} {...props}>
      {children}
    </View>
    </ThemeProvider>
  );
};

export default Container

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
