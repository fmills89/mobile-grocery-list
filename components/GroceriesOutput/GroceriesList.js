import { Text } from 'react-native';

// in react to split bigger comps into smaller comps
import { FlatList } from 'react-native';

function renderGroceryItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

function GroceriesList({ groceries }) {
  return (
    <FlatList
      data={groceries}
      renderItem={renderGroceryItem}
      keyExtractor={item => item.id}
    />
  );
}

export default GroceriesList;
