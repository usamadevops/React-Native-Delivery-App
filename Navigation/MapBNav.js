import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import color from '../Constants/Colors/color'
import {Track,Chat} from '../Screens'
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const MapTab=createMaterialBottomTabNavigator();
const ChatStack=createStackNavigator();

const ChatStacks=()=>{
  return(
  <ChatStack.Navigator  headerMode="none" initialRouteName="ChatScreen">
    <ChatStack.Screen name="ChatScreen" component={Chat.ChatScreen}  options={{headerShown:false}}/>
    <ChatStack.Screen name="ChatMessages" component={Chat.ChatMessages} />
  </ChatStack.Navigator>
  );
}







const Maptab=()=>{
return(
  <MapTab.Navigator
  keyboardHidesNavigationBar={true}
  sceneAnimationEnabled={true}
shifting={true}
  initialRouteName="Track"
  barStyle={[{ backgroundColor: color.Secondary }, { height: 60 }]}
  activeColor={color.White}

  tabBarOptions={{
    style: {
      justifyContent: "space-evenly",
  
    },
  
    labelStyle: {
      flexDirection: "row",
      flexWrap: "nowrap",
      fontSize: 14,
      fontWeight: "bold"
    },
  }}
  >
    <MapTab.Screen name="Track" component={Track}
    options={{
  
  tabBarLabel: 'Track Package',
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="map" size={26} color={color} />
  ),
  tabBarColor:"#000",

}}
/>
<MapTab.Screen name="ChatStacks" component={ChatStacks}
    options={{
  tabBarAccessibilityLabel:"Check your Messages",
  tabBarLabel: 'Chats with Drivers',
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="chat" size={26} color={color} />
  ),
  tabBarBadge:"New",

}}
/>

  </MapTab.Navigator>
);
}
 const getHeaderTitle=(route)=>{
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Track';

  switch (routeName) {
    case 'Track':
      return 'Track Location';
 case 'ChatStacks':
   return 'Recent Chats';
   case 'ChatMessages':
   return "Messages";

  }
}
export {Maptab,getHeaderTitle,ChatStacks};