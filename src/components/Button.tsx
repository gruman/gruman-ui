import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  marginBottom?: number;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, marginBottom }) => {

  return (
    <Pressable
      style={[styles.button,{ marginBottom: marginBottom && marginBottom >= 0 ? marginBottom : 20}]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
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
