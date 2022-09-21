import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/styles';

function GroceryItem({ description, date }) {
  const navigation = useNavigation();

  function groceryPressHandler() {
    navigation.navigate('ManageGrocery', {
      groceryId: id,
    });
  }
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={groceryPressHandler}
    >
      <View style={styles.groceryItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
