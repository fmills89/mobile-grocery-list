import { Text } from 'react-native';
import GroceriesOutput from '../components/GroceriesOutput/GroceriesOutput';

function RecentGroceries() {
  return <GroceriesOutput groceriesPeriod="Last 7 days" />;
}

export default RecentGroceries;
