// services/verifyAuth.js
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const verifyAuth = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      return true; // The user is authenticated
    } else {
      return false; // The user is not authenticated
    }
  } catch (error) {
    console.error("Error checking authentication", error);
    return false; // Default to unauthenticated
  }
};
