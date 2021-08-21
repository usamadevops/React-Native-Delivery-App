import color from '../../Constants/Colors/color'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
      },
      Top: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      Username: {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
      },
      Text: {

            fontSize: 20,
            fontWeight: "500",
            marginHorizontal: 5,
            color: color.White,

      },
      LinearGradient:
      {
            opacity: 0.85,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: ("100%"),
      },
      BtnRate: {
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: color.Secondary,
            padding: 10,
            borderRadius: 10,
            borderWidth: 2,

      },
      logout:{
            position: 'absolute',
            top: 20,
            left: 20,
            backgroundColor: color.Secondary,
            padding: 10,
            borderRadius: 10,
            borderWidth: 2,
      },
      Middle: {
            flexDirection: 'row',
            justifyContent: "center",
            width: ("85%"),
            height: ('8%'),
            marginTop: 5,
            backgroundColor: color.White,
            borderRadius: 10,
      },
      Content: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

      },
      titletext: {
            fontWeight: "500",
            fontSize: 14,
            marginBottom: 5,
            color: color.Secondary,
            textAlign:"center"
      },
      subheadertext: {
            fontWeight: "500",
            fontSize:20,
            color: color.Secondary,
            margin:5,
            opacity:0.5
      },

      Bottom: {
            flex: 3,
            height: ("100%"),
            width: ("85%"),
            flexDirection: "column",
            paddingVertical: 30
      },
      ContentContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginVertical: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderBottomWidth: 3,
            borderColor: color.White,


      },
      ContentText: {
            fontWeight: '500',
            fontSize: 16,
            color: color.White
      },
      InfoTextContainer: {
            flexDirection: "row",
            alignSelf: "flex-end"
      },
      InfoText: {
            color: color.White,
            fontSize: 16,
            fontWeight: "600",
            marginRight:10
      },
      copyright: {
            alignSelf: "center",
            marginTop: 40,
      },
      copyrightText: {
            fontSize: 22,
            color: color.White,
            textDecorationStyle: "solid",
      }

});
export default styles;