import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../Constants/Colors/color';
export default styles = StyleSheet.create(
    {
        ContainerView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: color.Secondary
        },
        LinearGradient:
        {
            opacity: 0.85,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: hp("100%"),
        },
        subcontainer: {

            height: 75,
            width: wp("95%"),
            backgroundColor: 'white',
            borderRadius: 10,
            marginBottom: 6,

        },
        ClickableContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly"
        },
        imageStyle: {
            flex: 1.1,
        },
        Texts: {
            flex: 3.5,
            justifyContent: "space-evenly",
        },
        Time: {
            flexDirection:"row",
            width: 70,
            alignItems:"center",
            justifyContent:"center",
            opacity:0.8,
            borderTopRightRadius:10,
            borderBottomEndRadius:10,
        },
        tinyLogo: {
            flexDirection: "row",
            height:75,
            width: 70,
            marginRight: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        }
    });