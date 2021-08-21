import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-elements'
import styles from './styles';
import color from '../../Constants/Colors/color'
import defaultImage from '../../data/images/maxresdefault.png'
import { logout } from '../../firebase/firebase'
// import { auth, firestore } from 'firebase';
const Setting = ({ navigation }) => {
    const [image, setImage] = useState(null);
    // const UserData=firestore().collection('users');
    // const userid=auth().currentUser;
    // function User({ userid }) {    
    //       const subscriber = 
    //       UserData
    //       .doc(userId)
    //       .onSnapshot(documentSnapshot => {
    //         console.log('User data: ', documentSnapshot.data());
    //       });}


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [6, 5],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    async function handleSignOut() {
        try {
            await logout();
        } catch (error) {
            alert(error);
        }
    }
    return (

        <View style={styles.container}>
            <StatusBar hidden />
            <LinearGradient
                start={0, 0}
                end={1, 1}
                colors={[color.Orange, color.Pink]}
                style={styles.LinearGradient}
            />
            <View style={styles.Top}>
                <Avatar
                    onPress={pickImage}
                    rounded
                    size="large"
                    source={image ? { uri: image } : defaultImage}
                />
                <View style={styles.Username}>
                    <Text style={styles.Text}>Usama</Text>
                    <TouchableOpacity onPress={() => alert("you can edit your name")}>
                        <FontAwesome5 name="user-edit" size={18} color={color.White} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.BtnRate}>
                <TouchableOpacity onPress={() => Model()}>
                    <Text style={{ color: color.White }}>Rate us</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity onPress={() => handleSignOut()}>
                    <Text style={{ color: color.White }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Middle}>
                <View style={styles.Content}>
                    <View style={styles.numbers}>
                        <Text style={styles.subheadertext}> Rs 43,000</Text>
                    </View>
                    <View>
                        <Text style={styles.titletext}> Total Earnings</Text>
                    </View>

                </View>

                <View style={styles.Content}>
                    <View style={styles.numbers}>
                        <Text style={styles.subheadertext}>34</Text></View>

                    <View>
                        <Text style={styles.titletext}>Overall Usability</Text></View>

                </View>
            </View>
            <View style={styles.Bottom}>
                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Email</Text>
                    <View style={styles.InfoTextContainer}>
                        <Text style={styles.InfoText}>ualtaf238@gmail.com</Text>
                        <TouchableOpacity
                            onPress={() => alert('"Edit the Email')}>
                            <MaterialCommunityIcons name="circle-edit-outline" size={20} color={color.White} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Password</Text>
                    <View style={styles.InfoTextContainer}>
                        <Text style={styles.InfoText}>**********</Text>
                        <TouchableOpacity onPress={() => alert('change Password')}>
                            <MaterialCommunityIcons name="circle-edit-outline" size={20} color={color.White} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Payment</Text>
                    <View style={styles.InfoTextContainer}>
                        <MaterialIcons name="payment" size={26} color="#fff" />
                        <TouchableOpacity onPress={() => alert('change Password')}>
                            <MaterialCommunityIcons name="circle-edit-outline" size={20} color={color.White} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Contact Us</Text>
                    <TouchableOpacity onPress={() => alert('change Password')}>
                        <MaterialIcons name="contact-support" size={24} color={color.White} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Messages</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Chatscreen")}>
                        <MaterialIcons name="messenger" size={24} color={color.White} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.ContentText}>Terms and Conditions</Text>
                    <TouchableOpacity onPress={() => alert('change Password')}>
                        <MaterialIcons name="question-answer" size={24} color={color.White} />
                    </TouchableOpacity>
                </View>

                <View style={styles.copyright}>
                    <Text style={styles.copyrightText}>Version 1.0.0</Text>
                </View>
            </View>
        </View>

    );
}


export default Setting;