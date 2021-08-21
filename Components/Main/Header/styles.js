import { StyleSheet } from 'react-native'
import color from '../../../Constants/Colors/color'
const styles = StyleSheet.create({
      LeftText: {
            position: "absolute",
            zIndex: 100,
            width: "100%",
            top: 15,
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: 20,


      },
      Text: {
            fontWeight: "bold",
            fontSize: 28,
            color: color.Secondary,
            left: 10,
            letterSpacing: 5
      },
      locationView: {
            alignSelf: "center",
            marginHorizontal: 30,
            flexDirection: 'row'
            
      },
      location: {
            fontWeight: "600",
            fontSize: 16,
            letterSpacing: 1,
            color: color.Secondary,
            marginLeft:5,

      }

});
export default styles;