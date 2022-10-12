import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

function GroceryCatTile({ title, color, onPress }) {
  return (
    <View style={gridItem}>
      <Pressable>
        <View>
          <Text></Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GroceryCatTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
});
