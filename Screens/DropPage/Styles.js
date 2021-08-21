import { StyleSheet } from 'react-native'
import color from '../../Constants/Colors/color';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create(
      {
            ContainerView: {
                  flex: 1,

                  alignItems: "center",
                  flexDirection: 'column',
                  
            },

            TopContainer: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: "space-evenly",
                  alignItems: "center",

            },
            MiddleContainer: {
                  flex: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",

            },
            BottomContainer: {
                  flex: 1, 
paddingBottom:20,
            },

            buttonStyle: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',

                  borderRadius: 10,
                  marginRight: 10
            },
            textStyle: {
                  fontSize: 20,
                  padding: 10,
                  paddingLeft: 30,
                  color: color.White
            },
            LinearGradient:
            {
                  opacity: 0.85,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom:0,
                  height: "100%",
            },


            titleText: {
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingVertical: 20,
            },
            imageStyle: {
                  width: wp("10%"),
                  height: hp("10%"),
                  margin: 2,
                  borderWidth: 2,
                  borderColor: 'black'
            },
            button: {

                  paddingVertical :10,
                  width: wp('90%'),
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: 'row',
                  borderRadius: 5,
                  elevation: 4,
                  backgroundColor: "#ffffff"
            },

            InputView: {
                  borderColor: "#ccccce",
                  borderColor: "#c4c4c4",
                  height: hp("7.2%"),
                  width: wp("90%"),
                  backgroundColor: "#ffffff",
                  borderRadius: 5,
                  paddingLeft: 10,

            },
            locationtext: {
                  fontSize: 15,
                  color: color.Secondary,
                  opacity: 0.6,
                  marginTop: 13
            },
            InputContainer:
            {
                  borderWidth: 0.7,
                  borderColor: "#FF11",
                  margin: 10,

            },
            icon: {
                  borderWidth: 1,
                  marginHorizontal: 20,
                  borderColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  shadowColor: 'gray',
                  shadowOffset: {
                        width: 0,
                        height: 2
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 2
            }
      });
export default styles;