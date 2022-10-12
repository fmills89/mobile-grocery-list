import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

import GroceryItem from '../components/GroceryItem';
import GroceryInput from '../components/GroceryInput';
import { GlobalStyles } from '../constants/styles';

function CategoryDetailsScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // setting to empty array that is what we want to handle
  const [courseGroceries, setCourseGroceries] = useState([]);

  function startAddGroceryHandler() {
    setModalIsVisible(true);
  }

  function endAddGroceryHandler() {
    setModalIsVisible(false);
  }

  function addGroceryHandler(enteredGroceryText) {
    setCourseGroceries(currentCourseGroceries => [
      ...currentCourseGroceries,
      { text: enteredGroceryText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGroceryHandler(id) {
    setCourseGroceries(currentCourseGroceries => {
      return currentCourseGroceries.filter(grocery => grocery.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add Grocery Item"
        color={GlobalStyles.colors.accent500}
        onPress={startAddGroceryHandler}
      />
      <GroceryInput
        visible={modalIsVisible}
        onAddGrocery={addGroceryHandler}
        onCancel={endAddGroceryHandler}
      />
      <View style={styles.groceryContainer}>
        <FlatList
          data={courseGroceries}
          renderItem={itemData => {
            return (
              <GroceryItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGroceryHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
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
