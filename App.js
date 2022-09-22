import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GroceryItem from './components/GroceryItem';
import GroceryInput from './components/GroceryInput';
import { GlobalStyles } from './constants/styles';

export default function App() {
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
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add Grocery Item"
          color={GlobalStyles.colors.primary300}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  groceryContainer: {
    flex: 4,
  },
});
