// import React,  { Component,useEffect, useState } from 'react'
// import { AppLoading } from 'expo-app-loading'
// import { Asset } from 'expo-asset'
// import * as Font from 'expo-font'
// import * as Icon from '@expo/vector-icons'
// import Firebase from '../firebase/firebase'
// import { withFirebaseHOC } from '../firebase/index'
// import { ActivityIndicator } from 'react-native'

// // const Initial=({ navigation})=>{

// //   const  [Loading, setLoading] = useState(true)
// //   useEffect(() => {
// //     try {
// //       loadLocalAsync()
// //        Firebase.checkUserAuth(user => {
// //         if (user) {
// //           // if the user has previously logged in
// //           navigation.navigate("MainStackScreen")
// //         } else {
// //           // if the user has previously signed out from the app
// //           navigation.navigate('RootStackScreen')
// //         }
// //       })
// //     } catch (error) {
// //       console.log(error)
// //     }
// //     return () => {
// //       loadLocalAsync()
// //     }
// //   }, [])

// //   const loadLocalAsync = async () => {
// //     Loading &&
// //       <ActivityIndicator style={{ justifyContent: 'center', alignItems: "center", flex: 1 }} />
// //       return await Promise.all([
// //         Asset.loadAsync([
// //           require('../Assets/res/Images/background.png'),
// //           require('../Assets/res/Images/MainBackground.jpg'),
// //           require('../Assets/res/Images/pickpackage.png'),
// //           require('../Assets/res/Images/sendpackage.png'),
// //         ]),
// //         Font.loadAsync({
// //           ...Icon.Ionicons.font,
// //           ...Icon.AntDesign.font,
// //           ...Icon.MaterialIcons.font,
// //           ...Icon.FontAwesome5.font,
// //           ...Icon.FontAwesome.font

// //         })
// //       ])

// //     }
  

// //   handleLoadingError = error => {
// //     // In this case, you might want to report the error to your error
// //     // reporting service, for example Sentry
// //     console.warn(error)
// //   }

// //   handleFinishLoading = () => {
// //     setLoading(false);
// //   }
// //   return (
// //     <AppLoading
// //       startAsync={loadLocalAsync}
// //       onFinish={handleFinishLoading}
// //       onError={handleLoadingError}
// //     />
// //   );
// // }


// // export default Initial

// export default class Initial extends Component {
//   state = {
//     isAssetsLoadingComplete: false
//   }

//   componentDidMount = async () => {
//     try {
//       // previously
//       this.loadLocalAsync()

//       await this.props.firebase.checkUserAuth(user => {
//         if (user) {
//           // if the user has previously logged in
//           this.props.navigation.navigate('MainStackScreen')
//         } else {
//           // if the user has previously signed out from the app
          
//           this.props.navigation.navigate('RootStackScreen')
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   loadLocalAsync = async () => {
//     <ActivityIndicator />
//     return await Promise.all([
//       Asset.loadAsync([
//         require('../Assets/res/Images/background.png'),
//         require('../Assets/res/Images/MainBackground.jpg'),
//            require('../Assets/res/Images/pickpackage.png'),
//                 require('../Assets/res/Images/sendpackage.png'),
//       ]),
//       Font.loadAsync({
//         ...Icon.Ionicons.font,
//         ...Icon.AntDesign.font,
//             ...Icon.MaterialIcons.font,
//               ...Icon.FontAwesome5.font,
//               ...Icon.FontAwesome.font
//       })
//     ])
//   }

//   handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error)
//   }

//   handleFinishLoading = () => {
//     this.setState({ isAssetsLoadingComplete: true })
//   }

//   render() {
//     return (
//       <AppLoading
//         startAsync={this.loadLocalAsync}
//         onFinish={this.handleFinishLoading}
//         onError={this.handleLoadingError}
//       />
//     )
//   }
// }




