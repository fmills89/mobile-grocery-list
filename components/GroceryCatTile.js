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
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.os === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
});
