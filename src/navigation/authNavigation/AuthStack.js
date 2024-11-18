// navigation/authNavigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../container/unauthenticated/Login';
import { SignupScreen } from '../../container/unauthenticated/Signup';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
