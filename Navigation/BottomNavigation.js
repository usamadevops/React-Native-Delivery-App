import React from 'react';
import {Main,Settings,History} from '../Screens'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import color from '../Constants/Colors/color'
import { Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const GetMainHeader=(route)=>{
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Main';

  switch (routeName) {
    case 'Main':
      return 'Home';
    case 'Settings':
      return 'Profile';
    case 'History':
      return 'History'

  }
}

const Tab = createMaterialBottomTabNavigator();


const BottomNavigator = () => {
  return (

    <Tab.Navigator 
    keyboardHidesNavigationBar={true}
      initialRouteName="Main"
      barStyle={[{ backgroundColor: color.Secondary }, { height: 57 }]}
      activeColor={color.White}
 
      tabBarOptions={{
        style: {
          justifyContent: "space-evenly",
      
        },
        labelStyle: {
          flexDirection: "row",
          flexWrap: "nowrap",
          fontSize: 10,
          fontWeight: "bold"
        },
      }}
      >
      <Tab.Screen name="Setting" component={Settings}
        options={{
  
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <Octicons name="settings" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Main" component={Main}
        barStyle={[{ backgroundColor: color.White }, { width: ("100%") }]}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="microsoft" size={26} color={color} />
          ),
          

        }}
      />

      <Tab.Screen name="History" component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export {BottomNavigator,GetMainHeader}
