import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../Constants/Colors/color';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create(
      {
            ContainerView: {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 0,
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
            InformationView: {
                  flex: 2,
               
                  margin: 10
            },
            BottomContainer: {
                  flex: 2.5,
                  marginTop: 10,
                  height: 350,
                  width: 340,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 10,
                  marginBottom: 100
            },
            Details: {
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: "center",
                  justifyContent:"center"

            },
            Icons: {
  
                  borderWidth: 1,
                  padding: 12,
                  borderRadius: 30,
                  marginHorizontal:5,
                  alignItems: "center",
                  justifyContent:"center"
            },
            Text: {
                  flex: 2,
                  marginHorizontal:20,
                  fontWeight:"500",
                  fontSize:18,
                  color:color.Secondary
            },
            button: {
                  alignItems: "center",
                  backgroundColor: color.Orange,
                  justifyContent: 'center',
                  padding: 8,
                  flexDirection: 'row',
                  borderRadius: 50,
             
            },

            tinyLogo: {
                  height: 70,
                  width: 70,
                  borderRadius: 40,
                  marginRight: 10
            },


            btntext: {
                  fontSize: hp("2.5%"),
                  color: color.White,
                  fontWeight:"800"
            },

      });
export default styles