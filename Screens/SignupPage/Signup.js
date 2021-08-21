
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, TouchableWithoutFeedback,ToastAndroid,Keyboard, Text } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import color from '../../Constants/Colors/color'
import { registerWithEmail,GoogleSignup } from '../../firebase/firebase'
import styles from '../Styles/SSL_Styles';

import  {firestore} from 'firebase'

import Loader from '../../Components/Loader'
const Signup = ({ navigation }) => {//error was here you have to add two brackets

    const [Loading, setLoading] = useState(false)
    const [data, setdata] = useState({ username: '', email: '', check_TextInputChange: '', secureTextEntry: true, Password: '', confirmPassword: '', });
    //This is for Name
    const NameInputChange = (Name_val) => {
        if (Name_val.length > 4) setdata({ ...data, username: Name_val, check_NameInputChange: true });
        else { setdata({ ...data, username: Name_val, check_NameInputChange: false }) }
    }

    const EmailInputChange = (Email_val) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    

        if (reg.test(Email_val) === true)
            setdata({ ...data, email: Email_val, check_EmailInputChange: true });
        else { setdata({ ...data, email: Email_val, check_EmailInputChange: false }) }
    }




    function HandlePasswordChange(Password_val) { setdata({ ...data, Password: Password_val }); }
    const HandleConfirmPasswordChange = (ConfirmPassword_val) => { setdata({ ...data, confirmPassword: ConfirmPassword_val }) }
    const updateSecuretextEntry = () => { setdata({ ...data, secureTextEntry: !data.secureTextEntry, }) }
  async function  googleSignup(email,Password){
      try{
          await GoogleSignup(email,Password);
      }
      catch (error) {
        setLoading(false)
        ToastAndroid.showWithGravityAndOffset(
            `${error}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            1000
        );
    }
  }
    async function handleOnSignUp(email, Password) {

        const usernames = data.username;
        const emails = data.email;
        const passwords = data.Password;
        // const name = data.name;
        if (data.Password !== data.confirmPassword && data.Password.length<8) {
            alert("Passwords rules Invalid.")
        }
        else if(data.username===null || data.username.length<5){
            ToastAndroid.showWithGravityAndOffset(
                `Name Invalid`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                190,
                600,
            );
        }
        else {
        try{
                setLoading(true)
                 await   firestore().collection('users').add({
                           usernames,emails,passwords
                       }).then(
                      await registerWithEmail(email, Password)
                       )
                    }
        catch(err)
        {
alert(err)
        }
    }
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Animatable.View animation="fadeIn" style={styles.ContainerView}>
            <Loader loading={Loading} />
                <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
                <View style={styles.TopCont}>
                    <Animatable.View animation="slideInLeft" style={styles.icon}>
                        <FontAwesome5 name="shipping-fast" size={80} color={color.Primary} />
                    </Animatable.View>

                    <View style={styles.TextContainer}>
                        <Animatable.Text animation="bounceIn" style={styles.Text}>  Create An Account </Animatable.Text>
                    </View>
                </View>
                <View style={styles.InputContainer}>

                    <View style={styles.InputBox}><FontAwesome name="user" size={20} color="black" />
                        <TextInput style={styles.TextInput} placeholder="Your name"
                            value={data.name}
                            onChangeText={(Name_val) => NameInputChange(Name_val)} />

                        {data.check_NameInputChange ?
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" size={20} color={color.Secondary} />
                            </Animatable.View>
                            : null}
                    </View>

                    <View style={styles.InputBox}><MaterialIcons name="email" size={20} color={color.Secondary} />
                        <TextInput style={styles.TextInput} placeholder="Your Email" AutoCompleteType="email"
                            value={data.email}
                            onChangeText={(Email_val) => EmailInputChange(Email_val)} />
                        {data.check_EmailInputChange ?
                            <Animatable.View animation="bounceIn" >
                                <Feather name="check-circle" size={20} color={color.Secondary} />
                            </Animatable.View>
                            : null
                        }
                    </View>

                    <View style={styles.InputBox}><FontAwesome name="lock" size={20} color="black" />
                        <TextInput style={styles.TextInput} placeholder="Your Password" type="password" secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(Password_val) => HandlePasswordChange(Password_val)}
                            value={data.Password} underlineColorAndroid="transparent"
                            autoCapitalize="none" />
                        <TouchableOpacity onPress={updateSecuretextEntry} marginLeft={10} >
                            {data.secureTextEntry ?
                                <FontAwesome5 name="eye" size={20} color={color.Secondary} />
                                :
                                <FontAwesome5 name="eye-slash" size={20} color={color.Secondary} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.InputBox}><FontAwesome name="lock" size={20} color="black" />
                        <TextInput style={styles.TextInput} placeholder="Confirm Password" type="password" secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(ConfirmPassword_val) => HandleConfirmPasswordChange(ConfirmPassword_val)} value={data.confirmPassword} underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity onPress={() => updateSecuretextEntry} marginLeft={10} >
                            {data.secureTextEntry ?
                                <FontAwesome5 name="eye" size={20} color={color.Secondary} />
                                :
                                <FontAwesome5 name="eye-slash" size={20} color={color.Secondary} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.ButtonContainer}>
                    <LinearGradient colors={['#F6FF00', '#FB5F06']} style={styles.button}>
                        <TouchableOpacity onPress={() => handleOnSignUp(data.email, data.Password)}>
                            <Text style={styles.btntext}>Signup</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text style={styles.basicText}>Or</Text>

                    <View style={styles.IconsOptions}>
                        <TouchableOpacity style={styles.Button_Icons_Options} onPress={() =>googleSignup(data.email, data.Password) }>
                            <FontAwesome name="google-plus" size={30} color={color.Primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Icons_Options} onPress={() => alert("Login for Optional Phone  pressed")}>
                            <FontAwesome name="phone" size={30} color={color.Primary} />
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.Footer}>
                    <Text style={styles.basicText}>Already have an Account?  </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.FooterText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>

        </TouchableWithoutFeedback>


    );
}
export default Signup;