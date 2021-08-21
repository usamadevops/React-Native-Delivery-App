import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { StyleSheet, Dimensions } from 'react-native'
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#000CAB",
      },
      LinearGradient:
      {
            opacity: 0.85,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get("window").height
      },
      TopImage: {
            opacity: 0.8,
      },
      Image: {
            width: Dimensions.get("window").width,
            height: 270,
            padding: 0,
            margin: 0,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
      },
      Buttons:
      {
            position: "relative",
            bottom: 60,
            width: ("100%"),
            flexDirection: 'row',
            justifyContent: "space-evenly",

      },
      topCont: {
            maxHeight: 330,
            overflow: 'hidden'
      },
      BottomContainer: {
            position: "relative",
            top: hp("3%"),
            width: "100%",
            height: hp("25%"),
            justifyContent: "center",
            alignItems: "center",
            elevation: 5

      }

});
export default styles;