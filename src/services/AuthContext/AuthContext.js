// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Check token on app load to set authentication status
  useEffect(() => {
    const checkAuthStatus = async () => {
      const storedToken = await AsyncStorage.getItem('authToken');
      if (storedToken) {
        setIsAuthenticated(true);
        setToken(storedToken);
      } else {
        setIsAuthenticated(false);
        setToken(null);
      }
    };

    checkAuthStatus();
  }, []);

  // Set the token on successful login
  const login = async (newToken) => {
    await AsyncStorage.setItem('authToken', newToken);  // Store token in AsyncStorage
    setIsAuthenticated(true);
    setToken(newToken);  // Store token in context
  };

  // Remove the token on logout
  const logout = async () => {
    await AsyncStorage.removeItem('authToken'); // Remove token from AsyncStorage
    setIsAuthenticated(false);
    setToken(null); // Clear token from context
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
