import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import ColorScreen from "./screens/Color";
import HolidayScreen from "./screens/Holiday";
import AnimalScreen from './screens/Animal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Holiday" component={HolidayScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;