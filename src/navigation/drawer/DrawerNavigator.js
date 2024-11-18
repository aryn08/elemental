// navigation/drawer/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TodoScreen } from '../../container/authenticated/Todo';
import { SettingScreen } from '../../container/authenticated/Setting';
import DrawerStyle from './DrawerStyles';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {DrawerStyle.iconStyle}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image 
              source = {require('../../assets/icon/home.png')}
              style = {DrawerStyle.iconStyle}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
