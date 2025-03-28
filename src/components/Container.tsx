import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

const Container: React.FC<ViewProps> = ({ children, style, ...props }) => {

  return (
    <View style={[styles.container, style]} {...props}>
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
