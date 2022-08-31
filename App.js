import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageGroceryList from './screens/ManageGroceryList';
import RecentGroceries from './screens/RecentGroceries';
import AllGroceryLists from './screens/AllGroceryLists';
import { GlobalStyles } from './constants/styles';

// creating stack const holds results of calling stackNavi
// stack const will hold object access to two comps
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// creating func comp for bottomtabs navi - nested navigation
function GroceriesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="RecentGroceries"
        component={RecentGroceries}
        options={{
          title: 'Recent Groceries',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllGroceryLists"
        component={AllGroceryLists}
        options={{
          title: 'All Grocery Lists',
          tabBarLabel: 'All Lists',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
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
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageGroceries" component={ManageGroceryList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
