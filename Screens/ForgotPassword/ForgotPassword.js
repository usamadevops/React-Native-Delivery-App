import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import color from '../../Constants/Colors/color'
import { View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Text,ToastAndroid } from 'react-native';
import {MaterialIcons, Feather,AntDesign } from '@expo/vector-icons';
import styles from './style'
import {passwordReset} from '../../firebase/firebase'


const ForgotPassword = ({navigation}) => {
 
      const [data, setdata] = useState({ email: '', check_TextInputChange: ''});
      const EmailInputChange = (Email_val) => {
          const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (reg.test(Email_val) === true)
              setdata(
                  {
                      ...data,
                      email: Email_val,
                      check_EmailInputChange: true
                  });
          else {
              setdata(
                  {
                      ...data,
                      email: Email_val,
                      check_EmailInputChange: false
                  }
              )
          }
      }

      async function handlePasswordReset(Email) {


        try {
          await passwordReset(Email);
          ToastAndroid.showWithGravityAndOffset(
           "Link Sent Successfully.Check Your Email to reset your Password",
             ToastAndroid.SHORT,
             ToastAndroid.BOTTOM,
             25,
             1000
           );
          navigation.navigate('Login');
        } catch (error) {
            ToastAndroid.showWithGravityAndOffset(
               `${error}`,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  10,
                  1500
                );
        }
      }


      return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View animation="fadeInDownBig" style={styles.container}>
                  <View style={styles.arrow}>
           <TouchableWithoutFeedback 
           onPress={()=>navigation.goBack()}>
           <AntDesign name="upcircleo" size={36} color="#000" />
           </TouchableWithoutFeedback>
           </View>
                    <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
                  <View style={styles.HeaderView}>
                        <Text style={styles.Header}>ForgotPassword</Text>
                  </View>
                  <View style={styles.InputBox}><MaterialIcons name="email" size={20} color={color.Secondary} />
                        <TextInput
                              style={styles.TextInput}
                              placeholder="Your Email"
                              placeholderTextColor="#000"
                              value={data.email}
                              onChangeText={(Email_val)=>EmailInputChange(Email_val)}
                        />
                        {data.check_EmailInputChange ?
                              <Animatable.View animation="bounceIn" >
                                    <Feather name="check-circle" size={20} color={color.Secondary} />
                              </Animatable.View>
                              : null}
                  </View>
                  <LinearGradient colors={['#F6FF00', '#FB5F06']} style={styles.button}>
                        <TouchableOpacity onPress={() =>handlePasswordReset(data.email) }>
                            <View>
                                <Text style={styles.btntext}>Send Me Code</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
            </Animatable.View>
            </TouchableWithoutFeedback>
      )

}
export default ForgotPassword;