import 'react-native-gesture-handler';
import React from 'react'
import Providers from './Navigation/index'
import { StatusBar, View } from "react-native"
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';
function App() {

 LogBox.ignoreAllLogs(true);
      return (
            <View style={{ flex: 1 }}>
                  <StatusBar barStyle="hide" />
              <Providers/>
            </View>
      
      )
}

export default App