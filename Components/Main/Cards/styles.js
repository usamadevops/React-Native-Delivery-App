import { StyleSheet } from 'react-native';
import color from '../../../Constants/Colors/color'

const styles = StyleSheet.create({
      container: {
            width: ("80%"),
            height: ("100%"),
            backgroundColor: "#fff",
            borderRadius: 20,
            alignItems: "center",
            shadowColor: color.White,
            alignItems: "center",

            margin: 20,
            shadowOffset: {
                  width: 0,
                  height: 10,
            },
            shadowOpacity: 0.9,
            shadowRadius: 7.49,

            elevation: 10


      },
      BottomContainer: {

            top: 100,
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            flexDirection: "row"
      },
      textView:
      {
            position: "relative",
            top: 20,
      },
      text: {
            fontSize: 28,
            fontWeight: "500",
            textAlign:"center"
      },
      Icons: {
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            width: ("50%"),
      

      },
})
export default styles;