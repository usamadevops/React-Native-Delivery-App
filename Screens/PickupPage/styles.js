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
            backgroundColor: color.White,
       
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
        TopCont: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: wp("100%"),
            textAlign: "center",
            marginTop: 10
        },
        Text: {
            fontSize: 40,
            color: color.White,
            textTransform: "capitalize",
            fontWeight: "bold",
            letterSpacing: 5
        },
        subcontainer: {

            height: hp("8%"),
            width: wp("100%"),
            backgroundColor: 'white',
            marginBottom: 2,

        },
        ClickableContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly"
        },
        imageStyle: {
            flex: 1,
        },
        Texts: {
            flex: 3,
            justifyContent: "space-evenly",
        },
        Time: {
            flex:1,
            flexDirection: "row",

            alignItems: "flex-start",
            justifyContent: "flex-start",
     
            marginTop: 10,

            borderTopRightRadius: 10,
            borderBottomEndRadius: 10,
        },

        tinyLogo: {
            flexDirection: "row",
            height: hp("8%"),
            width: 70,
            marginRight: 10,

        },
        CheckBoxcontainer: {

justifyContent:"center",
            height: hp("12%"),
            width: ("100%"),
            alignItems: "center",
            backgroundColor:color.Secondary,
            opacity:0.8,
marginBottom:5,

            overflow: "scroll"
        },
        section: {
            flex: 1,
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center"
        },
        paragraph: {
            fontSize: 15,
        },
        checkbox: {
            flexDirection:"row",
            margin: 2,
            justifyContent:"center",
            alignItems:"center",
        },
        box_text:{
            color:"#fff"
        },
    });
