import { View, Text, FlatList } from 'react-native';

// expect to recieve groceries to display in list and summarized
function GroceriesOutput({ groceries }) {
  return (
    <View>
      <View>
        <Text>Last 7 days</Text>
      </View>
      <FlatList />
    </View>
  );
}

export default GroceriesOutput;
