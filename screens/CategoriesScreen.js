import { FlatList } from 'react-native';
import CategoryGridTile from '../components/GroceryGridTile';
import AddGrocery from '../components/AddGrocery';

import { CATEGORIES } from '../data/data';

function CategoriesScreen({ navigation }) {
  function renderCatergoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('CategoryDetailsScreen', {
        categoryId: itemData.item.title,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <>
      <AddGrocery />
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.title}
        renderItem={renderCatergoryItem}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
