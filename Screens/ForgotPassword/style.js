import { StyleSheet } from 'react-native'
import color from '../../Constants/Colors/color'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
      },
      HeaderView:{
marginBottom:10,
      },
      Header:{
            fontSize:24,
            fontWeight:"600",
            letterSpacing:2,
      },
      arrow:{
position:"absolute",
zIndex:100,
top:40
      },
      btntext: {
            fontSize: 19,
            fontWeight:"500",
            color: color.Secondary,
        },
        button:
        {
            height: hp("6%"),
            width: wp("70%"),
            backgroundColor: color.Primary,
            shadowColor: color.Shadow,

            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 40,
            margin: 7
        },
      LinearGradient:
        {
            opacity: 0.85,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: hp("100%"),
        },
      InputBox: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: color.Shadow,
            borderWidth: 0.5,
            borderColor: color.Secondary,
            height: hp("6%"),
            width: wp("70%"),
            borderRadius: 40,
            margin: 10,
            padding: 10,
        },
        TextInput: {
            width: wp("50%"),
            color: color.Secondary,
            marginHorizontal:5,
            opacity:0.5
            

        },
})
export default styles;