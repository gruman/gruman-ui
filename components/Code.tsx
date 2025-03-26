import React from 'react';
import { Text as RNText, StyleSheet, TextProps, View, Platform } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

interface CustomTextProps extends TextProps {
}

const Code: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
  const { themeStyles } = useTheme();


  return (
    <ThemeProvider>
    <View style={styles.container}>
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
    </View>
    </ThemeProvider>
  );
};

export default Code

const styles = StyleSheet.create({
  container: {
    marginLeft: -20,
    marginRight: -20,
    marginBottom: 20,
    backgroundColor: '#ddd',
    padding: 20
  },
  text: {
    fontSize: 16,
    color: '#222',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'FiraCode_400Regular' : 'FiraCode_400Regular',
  },
});
