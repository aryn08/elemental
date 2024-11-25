// navigation/RootNavigator.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './authNavigation/AuthStack';
import AppStack from './stack/AppStack';
import { VerifyAuthToken } from '../services/AuthContext/VerifyAuthToken';
import { useAuth } from '../services/AuthContext/AuthContext';
import { StatusBar } from 'react-native';

const RootNavigator = () => {

  const { isAuthenticated } = useAuth(); 

  useEffect(() => {
  }, [isAuthenticated]); 

  return (
    <NavigationContainer>
      <StatusBar
          animated={true}
          backgroundColor="#2c3e50"
        />
      {isAuthenticated ? <AppStack /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
