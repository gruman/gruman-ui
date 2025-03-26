import React from 'react';
import { FlatList, StyleSheet, View, Pressable } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Item } from '../../constants/types';
import { Text } from '../../gruman-ui-rn'

interface ListProps {
  data: Item[];
  deleteButton?: (id: string) => void;
}

const List: React.FC<ListProps> = ({ data, deleteButton }) => {

  const ListItem = (item: any) => {

    return (
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
