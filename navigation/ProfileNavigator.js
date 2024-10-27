import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileListScreen from '../screens/ProfileListScreen';
import ProfileViewScreen from '../screens/ProfileViewScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import ProfileNewScreen from '../screens/ProfileNewScreen';

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="List" component={ProfileListScreen} />
      <Stack.Screen name="View" component={ProfileViewScreen} />
      <Stack.Screen name="Edit" component={ProfileEditScreen} />
      <Stack.Screen name="New" component={ProfileNewScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});