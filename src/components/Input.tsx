import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input: React.FC<TextInputProps> = (props) => {

  return (
    <TextInput
      style={[styles.input]}
      {...props}
    />
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
