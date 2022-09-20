import { View } from 'react-native';

import GroceriesSummary from './GroceriesSummary';
import GroceriesList from './GroceriesList';

const DUMMY_GROCERIES = [
  {
    id: 'e1',
    description: 'Eggs',
    date: new Date('2022-09-19'),
  },
  {
    id: 'e2',
    description: 'Bacon',
    date: new Date('2022-09-19'),
  },
  {
    id: 'e3',
    description: 'Bread',
    date: new Date('2022-09-19'),
  },
  {
    id: 'e4',
    description: 'Waffles',
    date: new Date('2022-09-19'),
  },
  {
    id: 'e5',
    description: 'Butter',
    date: new Date('2022-07-19'),
  },
];

// expect to recieve groceries to display in list and summarized
function GroceriesOutput({ groceries, groceriesPeriod }) {
  return (
    <View>
      <GroceriesSummary
        groceries={DUMMY_GROCERIES}
        periodName={groceriesPeriod}
      />
      <GroceriesList groceries={DUMMY_GROCERIES} />
    </View>
  );
}

export default GroceriesOutput;