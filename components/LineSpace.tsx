import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LineSpace: React.FC = () => {

  return (
    <View style={styles.lineBreak} />
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
