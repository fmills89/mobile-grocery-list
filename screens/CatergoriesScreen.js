import { FlatList } from 'react-native';
import CategoryGridTile from '../components/GroceryGridTile';

import { CATEGORIES } from '../data/data';

function CategoriesScreen({}) {
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
