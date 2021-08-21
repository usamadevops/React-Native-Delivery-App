import * as React from 'react'
import { Image } from 'react-native'
import { createStackNavigator ,} from '@react-navigation/stack';
import { Pick, Drop, Detail ,Chat} from '../Screens/index'
import { GetMainHeader, BottomNavigator } from './BottomNavigation'
import PickupLocation from '../Components/PickupLocation'
import DropoffLocation from '../Components/DropoffLocation'
import { Maptab, getHeaderTitle } from './MapBNav'

const MainStack = createStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../Assets/res/Images/sendpackage.png')}
    />
  );
}
const SettingsStack = createStackNavigator();
const Settingstack = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Chatscreen" component={Chat.ChatScreen} />
      <SettingsStack.Screen name="ChatMessages" component={Chat.ChatMessages} />
      {/* <SettingsStack.Screen name="TermsandConditions" component={TermsandConditions} /> */}
    </SettingsStack.Navigator>
  );
}
const MainStackScreen = () => {
  return (
    <MainStack.Navigator headerMode="screen" initialRouteName="BottomNavigation" screenOptions={{
      headerStyle: {
        backgroundColor: '#000',
        height: 60,
        elevation: 40,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '700',
        textAlign: "auto",
        fontSize: 24,

      },
    }} >
      <MainStack.Screen name="BottomNavigation" component={BottomNavigator} options={({ route }) => ({ headerTitle: GetMainHeader(route),headerShown:false })} />
      <MainStack.Screen name="Pick" component={Pick} options={{ title: 'Pick any Package', }} />
      <MainStack.Screen name="Drop" component={Drop} initialParams={{ CurrentLocation: '', Dropoff: '' }} />
      <MainStack.Screen name="Settings" component={Settingstack} options={{ headerTitle: 'Profile' }} />
      <MainStack.Screen name="Maptab" component={Maptab} options={({ route }) => ({ headerTitle: getHeaderTitle(route),headerTitleAlign:"center",headerTransparent:true,headerShown:false})} />
      <MainStack.Screen name="Detail" component={Detail} options={{ title: 'Details' }} />
      <MainStack.Screen name="PickupLocation" component={PickupLocation} />
      <MainStack.Screen name="DropoffLocation" component={DropoffLocation} />
    </MainStack.Navigator>
  );
}
export default MainStackScreen;