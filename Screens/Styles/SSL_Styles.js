import { StyleSheet } from 'react-native'
import color from '../../Constants/Colors/color'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create(
    {
        ContainerView: {
            flex:1,
            backgroundColor: color.Secondary,
            flexDirection: 'column',
            alignItems:'center'
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
        ForgotPassText: {
            marginTop: 5,
            textAlign: "right",
            marginRight: 15,
            color: color.Shadow
        },
        TopCont: {
           height:hp("25%"),
      position:"relative"
        },
        icon: {
            top: 50,
            alignItems: "center",
            justifyContent: "center"
        },
        TextContainer: {
            top: hp("8%"),
            position: 'relative'
        },
        Text: {
            position: 'relative',
            color: color.White,
            fontSize: 26
        },
        basicText: {
            color: color.White
        },
        FooterText:
        {
            color: color.White,
            borderBottomWidth: 1,
            borderBottomColor: color.White,
        },

        InputContainer:
        {
    flex:2,
            width: wp("75%"),
            position:"relative"
        },
        TextInput: {
            width: wp("50%"),
            color: color.Secondary,
            marginHorizontal: 5,

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
            marginVertical:5,
            padding: 10,
        },

        Footer: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: 'flex-end',
            flexDirection: 'row',
     
bottom:20,

        },
        ButtonContainer: {
            justifyContent: 'flex-end',
            alignItems: "center",
height:hp("50%"),
            width: wp("100%"),
            position:"relative"
    
     
        },
        btntext: {
            fontSize: 19,
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
        IconsOptions: {
            width: wp("70%"),
            position: 'relative',
            top: hp("2%",),
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        },
        Button_Icons_Options:
        {
            marginRight: 20,
            marginLeft: 20,
        }
    }
)
export default styles;
