import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageGroceryList from './screens/ManageGroceryList';
import RecentGroceries from './screens/RecentGroceries';
import AllGroceryLists from './screens/AllGroceryLists';

// creating stack const holds results of calling stackNavi
// stack const will hold object access to two comps
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// creating func comp for bottomtabs navi - nested navigation
function GroceriesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentGroceries" component={RecentGroceries} />
      <BottomTabs.Screen name="AllGroceryLists" component={AllGroceryLists} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* setting up navigation config - navi container must be wrapped around all other navigation related comps */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GroceriesOverview"
            component={GroceriesOverview}
          />
          <Stack.Screen name="ManageGroceries" component={ManageGroceryList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
