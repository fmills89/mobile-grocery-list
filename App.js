import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import GroceriesContextProvider from './store/groceries-context';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <GroceriesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#cccccc' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#cccccc' },
            }}
          >
            <Stack.Screen
              name="CategoriesScreen"
              component={CategoriesScreen}
              options={{ title: 'Grocery Tiles' }}
            />
            <Stack.Screen
              name="CategoryDetailsScreen"
              component={CategoryDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GroceriesContextProvider>
    </>
  );
}
