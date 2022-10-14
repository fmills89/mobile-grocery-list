import { View, Button } from 'react-native';

import { useState } from 'react';

import { GlobalStyles } from '../constants/styles';
import GroceryInput from './GroceryInput';

function AddGrocery() {
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
    <View>
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
    </View>
  );
}

export default AddGrocery;
