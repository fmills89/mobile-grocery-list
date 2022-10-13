import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function GroceryItem({ id, title }) {
  return (
    <View style={styles.groceryItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        // onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.groceryText}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  pressedItem: {
    opacity: 0.5,
  },
  groceryText: {
    color: GlobalStyles.colors.primary700,
    padding: 8,
  },
});
