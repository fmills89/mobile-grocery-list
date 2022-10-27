import { FlatList } from 'react-native';
import CategoryGridTile from '../components/GroceryGridTile';

import { CATEGORIES } from '../data/data';

function CategoriesScreen({ navigation }) {
  function renderCatergoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('CategoryDetailsScreen', {
        categoryId: itemData.item.id,
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
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCatergoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
