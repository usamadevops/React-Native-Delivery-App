import * as firebase from 'firebase'
import  'firebase/auth'
import 'firebase/firestore'

import config from './config'

// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(config)
}
var provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>auth.createUserWithEmailAndPassword(email, password);
export const GoogleSignup=(email,password)=>auth.signInWithPopup(provider);
export const GoogleSignIn=(email,password)=>auth.signInWithRedirect(provider);
export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);


  
  // firestore
  export const createNewUser=userData => {
    return firebase.firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  }


