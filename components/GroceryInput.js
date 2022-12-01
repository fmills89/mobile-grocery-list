import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../constants/styles';

import { storeGroceryItem } from '../utils/http';

function GroceryInput(props) {
  const [enteredGroceryText, setEnteredGroceryText] = useState({
    title: '',
    categoryId: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');

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
        <Picker
          style={styles.picker}
          selectedValue={enteredGroceryText.categoryId}
          onValueChange={inputChangedHandler.bind(this, 'categoryId')}
        >
          <Picker.Item label="Produce" value="c1" />
          <Picker.Item label="Deli" value="c2" />
        </Picker>
        <TextInput
          style={styles.textInput}
          placeholder="Grocery Category"
          onChangeText={inputChangedHandler.bind(this, 'categoryId')}
          value={enteredGroceryText.categoryId}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Grocery"
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
    backgroundColor: GlobalStyles.colors.primary800,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: 'white',
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: '#7054FF',
    width: '100%',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
