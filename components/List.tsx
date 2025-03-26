import React from 'react';
import { FlatList, StyleSheet, View, Pressable } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';
import Text from './Text'

interface ListProps {
  data: any[];
  deleteButton?: (id: string) => void;
}

const List: React.FC<ListProps> = ({ data, deleteButton }) => {

  const ListItem = (item: any) => {

    return (
      <ThemeProvider>
      <View style={styles.listItem}>
        <View>
        <Text type="subheader">
          {item.title}
        </Text>
        <Text type="body">
          {item.description}
        </Text>
        </View>
        {
          deleteButton &&
          <Pressable onPress={() => deleteButton(item.id)}>
          <Text>X</Text>
          </Pressable>
        }
      </View>
      </ThemeProvider>
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => ListItem(item)}
    />
  );
};

export default List

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
