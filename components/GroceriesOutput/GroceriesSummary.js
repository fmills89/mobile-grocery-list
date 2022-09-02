import { View, Text } from 'react-native';

function GroceriesSummary({ groceries, periodName }) {
  return (
    <View>
      <Text>{periodName}</Text>
    </View>
  );
}

export default GroceriesSummary;
