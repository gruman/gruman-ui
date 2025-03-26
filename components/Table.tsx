import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';
import { Prop } from '../constants/types';

interface TableProps {
  headers: string[];
  data: Prop[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const { themeStyles } = useTheme();

  return (
    <ThemeProvider>
    <View style={styles.table}>
      <View style={[styles.row, styles.headers]}>
        {headers.map((header, index) => (
          <Text key={index} style={[themeStyles.text, styles.cell]}>
            {header}
          </Text>
        ))}
      </View>
      {data.map((row, index) => (
        <View key={row.id} style={styles.row}>
          <Text style={[themeStyles.text, styles.cell]}>{row.title}</Text>
          <Text style={[themeStyles.text, styles.cell]}>{row.description}</Text>
        </View>
      ))}
    </View>
    </ThemeProvider>
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
