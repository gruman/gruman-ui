import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

const LineSpace: React.FC = () => {
  const { themeStyles } = useTheme();

  return (
    <ThemeProvider>
    <View style={styles.lineBreak} />
    </ThemeProvider>
  );
};

export default LineSpace

const styles = StyleSheet.create({
  lineBreak: {
    marginBottom: 25,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#999'
  }
});
