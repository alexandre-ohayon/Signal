import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED"},
  headerTitleStyle: { color: "white"},
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
      name='Connexion' 
      component={LoginScreen} />
      <Stack.Screen
      name="S'enregistrer" 
      component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
