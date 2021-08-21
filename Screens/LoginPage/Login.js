
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Text, ToastAndroid } from 'react-native';
import { FontAwesome5, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import color from '../../Constants/Colors/color'
import styles from '../Styles/SSL_Styles';
import { loginWithEmail } from '../../firebase/firebase'
import Loader from '../../Components/Loader'




const Login = ({ navigation }) => {


const [Loading, setLoading] = useState(false)
    const [data, setdata] = useState({ email: '', check_TextInputChange: '', secureTextEntry: true, Password: '', });

    const EmailInputChange = (Email_val) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(Email_val) === true && Email_val != null)
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
    const HandlePasswordChange = (Password_val) => {
        setdata({ ...data, Password: Password_val })
    }
    const updateSecuretextEntry = () => {
        setdata({ ...data, secureTextEntry: !data.secureTextEntry, })
    }


    async function handleOnLogin(email, Password) {
     
        try {
            setLoading(true)
            await loginWithEmail(email, Password)
        }
        catch (error) {
            setLoading(false)
            ToastAndroid.showWithGravityAndOffset(
                `${error}`,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                500
            );
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
                        <Animatable.Text animation="bounceIn" style={styles.Text}>   LOGIN </Animatable.Text>
                    </View>
                </View>

                <View style={styles.InputContainer}>

                    <View style={styles.InputBox}><MaterialIcons name="email" size={20} color={color.Secondary} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Your Email"
                            placeholderTextColor="#aaaaaa"
                            value={data.email}
                            onChangeText={(Email_val) => EmailInputChange(Email_val)}
                        />
                        {data.check_EmailInputChange ?
                            <Animatable.View animation="bounceIn" >
                                <Feather name="check-circle" size={20} color={color.Secondary} />
                            </Animatable.View>
                            : null}
                    </View>
                    <View style={styles.InputBox}><FontAwesome name="lock" size={20} color="black" />
                        <TextInput style={styles.TextInput}
                            placeholder="Your Password"
                            placeholderTextColor="#aaaaaa"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            value={data.Password}
                            onChangeText={(Password_val) => HandlePasswordChange(Password_val)}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity onPress={updateSecuretextEntry} marginLeft={10} >
                            {data.secureTextEntry ?
                                <FontAwesome5 name="eye" size={20} color={color.Secondary} />
                                :
                                <FontAwesome5 name="eye-slash" size={20} color={color.Secondary} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} >
                        <Text style={styles.ForgotPassText}>Forgot Your password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonContainer}>
                    <LinearGradient colors={['#F6FF00', '#FB5F06']} style={styles.button}>
                        <TouchableOpacity onPress={() => handleOnLogin(data.email, data.Password)}>
                            <Text style={styles.btntext}>Login</Text>
                        </TouchableOpacity>
                    </LinearGradient>


                    <View>
                        <Text style={styles.basicText}>Or Login with</Text>
                    </View>
                    <View style={styles.IconsOptions}>
                        <TouchableOpacity style={styles.Button_Icons_Options} onPress={() => alert("With Google Plus")}>
                            <FontAwesome name="google-plus" size={30} color={color.Primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button_Icons_Options} onPress={() => alert("With Phone")}>
                            <FontAwesome name="phone" size={30} color={color.Primary} style={styles.phone} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Footer}>

                    <Text style={styles.basicText}>Don't have an Account?   </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.FooterText}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
      
        </TouchableWithoutFeedback>
  
    );
}
export default Login;