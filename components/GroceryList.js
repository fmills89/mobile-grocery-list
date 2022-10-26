import { View, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import GroceryItem from './GroceryItem';
import { fetchGroceries } from '../utils/http';

function renderGroceryItem(itemData) {
  // const item = itemData.item;
  // const groceryItemProps = {
  //   id: item.id,
  //   title: item.title,
  // };
  return <GroceryItem {...itemData.item} />;
}
function GroceryList({ groceries }) {
  const [fetchedGroceries, setFetchedGroceries] = useState([]);
  console.log(fetchedGroceries);

  useEffect(() => {
    async function getGroceries() {
      const groceries = await fetchGroceries();
      setFetchedGroceries(groceries);
    }
    getGroceries();
  }, []);

  return (
    <View styles={styles.groceryContainer}>
      <FlatList
        data={fetchedGroceries}
        keyExtractor={item => item.id}
        renderItem={renderGroceryItem}
      />
    </View>
  );
}

export default GroceryList;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 16,
  // },
  groceryContainer: {
    flex: 4,
  },
});
