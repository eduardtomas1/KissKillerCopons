import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import JocClassicScreen from './components/JocClassicScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c003e',
          },
          headerTintColor: '#c57cff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inici' }}
        />
        <Stack.Screen
          name="Joc Clàssic"
          component={JocClassicScreen}
          options={{ title: 'Joc Clàssic' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
