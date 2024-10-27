import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainNavigator from './MainNavigator';
import ErrorScreen from '../screens/ErrorScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
      />
      <Stack.Screen
        name='Main'
        component={MainNavigator}
      />
      <Stack.Screen
        name='Error'
        component={ErrorScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});