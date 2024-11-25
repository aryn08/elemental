// navigation/bottomTab/BottomTabNavigator.js
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../container/authenticated/Home';
import { ProductScreen } from '../../container/authenticated/Product';
import { NotificationsScreen } from '../../container/authenticated/Notification';
import { CommunicationScreen } from '../../container/authenticated/Communication';
import { ProfileScreen } from '../../container/authenticated/Profile';
import BottomTabStyles from './BottomTabStyles';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={
        {
          headerShown: false,
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Communication"
        component={CommunicationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
