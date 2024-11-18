// navigation/RootNavigator.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { verifyAuth } from '../services/verifyAuth/verifyAuth';
import AuthStackNavigator from './authNavigation/AuthStack';
import AppStack from './stack/AppStack';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await verifyAuth();
      setIsAuthenticated(authStatus);
    };

    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
