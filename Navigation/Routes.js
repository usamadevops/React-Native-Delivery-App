import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../firebase/firebase';
// import navigationTheme from './navigationTheme';
import RootStackScreen  from './StackNavigate';
import MainStackScreen from './MainStackScreen';
import { AuthUserContext } from './AuthUserProvider';
import Spinner from '../Constants/Spinner';


export default function Routes() {
  const { user, setUser } = useContext(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return  <Spinner/>
    
  }

  return (
    <NavigationContainer >
      {user ? <MainStackScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
}
