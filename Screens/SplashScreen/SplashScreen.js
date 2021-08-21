import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import color from '../../Constants/Colors/color'


const SplashScreen = ({ navigation }) => {


  return (
    <Animatable.View animation="fadeIn" style={styles.ContainerView}>
      <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
      <View style={styles.TopCont}>
        <Text style={styles.Text}Text>RouteWay</Text>
      </View>
      <View style={styles.MiddleContainer}>
        <Image style={styles.Image} source={require("../../Assets/res/Images/background.png")} />
      </View>
      <View style={styles.BottomContainer}>
        <LinearGradient colors={['#F6FF00', '#FB5F06']} style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btntext}>
              Get Started
  </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity onPress={() => alert("Terms btn pressed")}>
          <Text style={{ color: color.White }}>
            Terms of Service
              </Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}
const styles = StyleSheet.create(
  {
    ContainerView: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: color.Secondary
    },

    TopCont: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: wp("100%"),
      textAlign: "center"
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
    Text: {

      fontSize: 40,
      color: color.White,
      textTransform: "capitalize",
      fontWeight: "bold",
      letterSpacing: 5
    },
    btntext: {
      fontSize: hp("3%"),
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
    MiddleContainer: {
      flex: 2,
    },
    Image: {
      width: wp("100%"),
      height: hp("50%"),
    },
    BottomContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",//If border does not show just Try this one too
      width: wp("100%")
    }

  });

export default SplashScreen;
