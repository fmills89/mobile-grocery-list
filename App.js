import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GroceryDetailsScreen from './screens/CategoryDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#cccccc' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#cccccc' },
          }}
        >
          <Stack.Screen
            name="CategoryDetails"
            component={GroceryDetailsScreen}
            options={{
              title: 'List Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
