import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

const Input: React.FC<TextInputProps> = (props) => {
  const { themeStyles } = useTheme();

  return (
    <ThemeProvider>
    <TextInput
      style={[styles.input, themeStyles.text, themeStyles.container]}
      {...props}
    />
    </ThemeProvider>
  );
};

export default Input

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15
  },
});
