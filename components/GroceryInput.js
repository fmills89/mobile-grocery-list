import { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';

import { GlobalStyles } from '../constants/styles';
import SelectList from 'react-native-dropdown-select-list';

import { storeGroceryItem } from '../utils/http';
import { CATEGORIES } from '../data/data';

function GroceryInput(props) {
  // const groceriesCtx = useContext(GroceriesContext);
  const [enteredGroceryText, setEnteredGroceryText] = useState({
    title: '',
    categoryId: '',
  });

  // const [selectedLanguage, setSelectedLanguage] = useState('');

  // const data = [
  //   { key: '1', value: 'Produce' },
  //   { key: 2, value: 'Deli' },
  // ];

  function inputChangedHandler(enteredGroceryText, enteredValue) {
    setEnteredGroceryText(curEnteredGroceryText => {
      return {
        ...curEnteredGroceryText,
        [enteredGroceryText]: enteredValue,
      };
    });
  }

  function addGroceryHandler() {
    const groceryData = {
      title: enteredGroceryText.title,
      categoryId: enteredGroceryText.categoryId,
    };
    storeGroceryItem(groceryData);
  }

  // combining props.onAddGrocery to close modal - addGroceryHandler to add to database
  addingGroceryCombined = () => {
    addGroceryHandler();
    props.onAddGrocery();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/imgs/grocery-icon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter grocery item!"
          onChangeText={inputChangedHandler.bind(this, 'title')}
          value={enteredGroceryText.title}
        />

        {/* <TextInput
          style={styles.textInput}
          placeholder="Grocery Category"
          onChangeText={inputChangedHandler.bind(this, 'categoryId')}
          value={enteredGroceryText.categoryId}
        /> */}
        <View style={styles.dropDownListContainer}>
          <SelectList
            boxStyles={styles.dropdownList}
            inputStyles={{ fontSize: 13 }}
            placeholder="Department"
            setSelectedLanguage={setSelectedLanguage}
            onSelect={() => alert(selected)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={addingGroceryCombined}
              color={GlobalStyles.colors.accent500}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GroceryInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#cccccc',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  dropDownListContainer: {
    borderWidth: 1,
    width: '100%',
    padding: 6,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  textInput: {
    borderWidth: 1,

    backgroundColor: 'white',
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    width: '100%',
    padding: 12,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  button: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
  },
});
