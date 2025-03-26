import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'default'; // Add type prop for alert variations
}

const Alert: React.FC<AlertProps> = ({ message, type = 'default' }) => {
  const { themeStyles } = useTheme();

  // Determine styles dynamically based on alert type
  const alertStyle = [styles.alert, styles[type]];
  const textStyle = [themeStyles.text, styles[`${type}Text`]];

  return (
    <ThemeProvider>
    <View style={styles.alert}>
      <Text style={styles.text}>{message}</Text>
    </View>
    </ThemeProvider>
  );
};

export default Alert

const styles = StyleSheet.create({
  text: {
    fontSize: 17
  },
  alert: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#eee'
  },
  // Error alert styles
  error: {
    backgroundColor: '#fdecea', // Light red background
    borderColor: '#f5c6cb', // Red border
  },
  errorText: {
    color: '#721c24', // Dark red text
  },
  // Success alert styles
  success: {
    backgroundColor: '#e9f7ef', // Light green background
    borderColor: '#c3e6cb', // Green border
  },
  successText: {
    color: '#155724', // Dark green text
  },
  // Default alert styles
  default: {
    backgroundColor: '#ddd', // Neutral light gray background
    borderColor: '#888', // Neutral gray border
  },
  defaultText: {
    color: '#383d41', // Neutral dark gray text
  },
});
