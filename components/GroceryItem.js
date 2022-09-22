import { StyleSheet, View, Text, Pressable } from 'react-native';

function GroceryItem(props) {
  return (
    <View style={styles.groceryItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.groceryText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  groceryText: {
    color: 'white',
    padding: 8,
  },
});
