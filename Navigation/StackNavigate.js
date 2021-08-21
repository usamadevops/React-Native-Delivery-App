import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen,Signup,Login,ForgotPassword} from '../Screens/index'

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SplashScreen" >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
export default RootStackScreen;