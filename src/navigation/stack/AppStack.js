// navigation/stack/AppStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../bottomTab/BottomTabNavigator';
import DrawerNavigator from '../drawer/DrawerNavigator';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
