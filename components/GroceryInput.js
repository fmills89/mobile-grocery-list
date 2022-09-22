import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { GlobalStyles } from '../constants/styles';

function GroceryInput(props) {
  const [enteredGroceryText, setEnteredGroceryText] = useState('');

  function groceryInputHandler(enteredText) {
    setEnteredGroceryText(enteredText);
  }

  function addGroceryHandler() {
    props.onAddGrocery(enteredGroceryText);
    setEnteredGroceryText('');
  }

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
          onChangeText={groceryInputHandler}
          value={enteredGroceryText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Grocery"
              onPress={addGroceryHandler}
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
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
