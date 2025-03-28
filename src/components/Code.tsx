import React from 'react';
import { Text as RNText, StyleSheet, TextProps, View, Platform } from 'react-native';

interface CustomTextProps extends TextProps {
}

const Code: React.FC<CustomTextProps> = ({ children, style, ...props }) => {


  return (
    <View style={styles.container}>
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
    </View>
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
