import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Prop } from '../constants/types';

interface TableProps {
  headers: string[];
  data: Prop[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.headers]}>
        {headers.map((header, index) => (
          <Text key={index} style={[styles.cell]}>
            {header}
          </Text>
        ))}
      </View>
      {data.map((row, index) => (
        <View key={row.id} style={styles.row}>
          <Text style={[styles.cell]}>{row.title}</Text>
          <Text style={[styles.cell]}>{row.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table

const styles = StyleSheet.create({
  table: {
  },
  row: {
    flexDirection: 'row',
  },
  headers: {
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderColor: '#888'
  },
  cell: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa'
  },
});
