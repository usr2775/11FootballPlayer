import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen';
import Portfolio from './components/Portafolio';
import { HomeScreen } from './components/HomeScreen';
import { AuthProvider } from './components/AuthContext';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Portfolio" component={Portfolio} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}