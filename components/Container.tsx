import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const Container: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.container, themeStyles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default Container

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
