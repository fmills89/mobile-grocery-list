import { View } from 'react-native';

import GroceriesSummary from './GroceriesSummary';
import GroceriesList from './GroceriesList';

// expect to recieve groceries to display in list and summarized
function GroceriesOutput({ groceries, groceriesPeriod }) {
  return (
    <View>
      <GroceriesSummary groceries={groceries} periodName={groceriesPeriod} />
      <GroceriesList />
    </View>
  );
}

export default GroceriesOutput;
