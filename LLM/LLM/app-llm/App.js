import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ea' }, 
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Bem-vindo!',
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={({ route }) => ({
            title: route.params?.customTitle || 'Resultado', 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
