import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

interface ButtonProps {
  title: string;
  onPress: () => void;
  marginBottom?: number;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, marginBottom }) => {
  const { themeStyles } = useTheme();

  return (
    <ThemeProvider>
    <Pressable
      style={[styles.button, themeStyles.container, themeStyles.reverseContainer,{ marginBottom: marginBottom && marginBottom >= 0 ? marginBottom : 20}]}
      onPress={onPress}
    >
      <Text style={themeStyles.reverseText}>{title}</Text>
    </Pressable>
    </ThemeProvider>
  );
};

export default Button

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
});
