import { View, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

import GroceryList from '../components/GroceryList';
import { GROCERIES, CATEGORIES } from '../data/data';

import { GlobalStyles } from '../constants/styles';
import AddGrocery from '../components/AddGrocery';

function CategoryDetailsScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedGroceries = GROCERIES.filter(groceryItem => {
    return groceryItem.categoryIds.indexOf(catId) >= 0;
  });

  // console.log(displayedGroceries);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <>
      <View styles={styles.appContainer}>
        <AddGrocery />
        <GroceryList items={displayedGroceries} />
      </View>
    </>
  );
}

export default CategoryDetailsScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  groceryContainer: {
    flex: 4,
  },
});
