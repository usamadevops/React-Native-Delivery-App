import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, Platform, ToastAndroid, Alert,ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import color from '../../Constants/Colors/color';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles'
import Dialog, { DialogTitle, SlideAnimation, DialogFooter, DialogContent } from 'react-native-popup-dialog';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import { AntDesign, Ionicons  } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import defaultImage from '../../data/images/maxresdefault.png'
import { LogBox } from 'react-native';
import { auth, firestore } from 'firebase';
import Loader from '../../Components/Loader'

const DropScreen = ({ navigation, route }) => {
    const [visible, setvisible] = useState(false);
    const [PackageName, setPackageName] = useState('')
    const [PackageDesc, setPackageDesc] = useState('')
    const [weight, setweight] = useState('')
    const [PackageType, setPackageType] = useState('Select  Package Type')
    const [selectedVehicle, setselectedVehicle] = useState("unknown");
    const [image, setImage] = useState("");
    const [Loading, setLoading] = useState(false)
    const { CurrentLocation, Dropoff } = route.params;

   

    useEffect(() => {
     const permission=   (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          
                if(status !== 'granted')
                {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }

            }
        })
        return permission;
    }, []);
    const Handlesubmit = async()=>{
   if(!PackageName || !PackageDesc || !PackageType || !weight|| !selectedVehicle ||!CurrentLocation ||!Dropoff)
   {
       Alert.alert("Fields are Invalid Please fill All the Feilds   ");
       return
   }
   try{
    setLoading(true)
    const timestamp = firestore.FieldValue.serverTimestamp();
await firestore().collection('Package').add({
    PackageName,PackageDesc,weight,PackageType,selectedVehicle,CurrentLocation,Dropoff,uid:auth().currentUser.uid,createddat:timestamp
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
        setvisible(true);

})
       setLoading(false);


    // ToastAndroid.showWithGravityAndOffset(
    //     "Package Added Successfully",
    //     ToastAndroid.LONG,
    //     ToastAndroid.BOTTOM,
    //     50,
    //     200)


   }
   catch(err)
   {
       setLoading(false);
       alert(err)
   }
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const Validity2 = (Desc) => {
        setPackageDesc(Desc);
    }
    const Validity = (Name) => {
        setPackageName(Name);
    }
    
    const WeightVal = (weight) => {
        const reg = /^[0-9]*$/;
        if (reg.test(weight) === true && !null) {
            setweight(weight);
            console.log(weight);
        }
        else {
            ToastAndroid.showWithGravityAndOffset(
                "Weight is Invalid range is upto 50kg",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                1000
            );
        }
    }
    LogBox.ignoreAllLogs();
    return (

        <ScrollView >
            <View style={styles.ContainerView}>
            <Loader loading={Loading} />
                <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />

                    <Text style={styles.textStyle}>Please enter your Package Details</Text>
                    <View style={styles.TopContainer}>
                        <View style={styles.ImageHelpText}>
                      
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textStyle}>Select Image</Text>
                                <AntDesign name="arrowright" size={24} color="black" />
                            </View>
                        </View>
                        <View style={styles.ImageView}>
                            <TouchableOpacity
                 onPress={ pickImage}
                            >
                                <Image source={image ? { uri: image } : defaultImage} style={{ width: 100, height: 100, borderWidth: 1, borderColor: 'gray', borderRadius: 10, }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.MiddleContainer}>
                        <View style={styles.InputContainer}>
                            <TextInput
                                placeholderTextColor="#999999"
                                placeholder="Choose a  name for your package"
                    
                                style={styles.InputView}
                                value={PackageName}
                                onChangeText={(Name) => Validity(Name)}
                            />
        
                        </View>
                        <View style={styles.InputContainer}>
                            <TextInput
                                placeholderTextColor="#999999"
                                placeholder="Describe your Package"
                            multiline={true}
                            scrollEnabled={true}
                            maxLength={200}
                                style={styles.InputView}
                                value={PackageDesc}
                                onChangeText={(Desc) => Validity2(Desc)}
                            />
        
                        </View>
                        
                        <View style={styles.InputContainer}>
                            <TextInput
                                placeholderTextColor="gray"
                                placeholder="What is Approximate Weight of your Package"
                                style={styles.InputView}
                                value={weight}
                        
                                keyboardType="numeric"
                                onChangeText={(weight) => WeightVal(weight)}
                            />
                        </View>
                        <View style={styles.InputContainer} >
                            <Picker
                                selectedValue={PackageType}
                                mode="dropdown"
                            collapsable={true}
                         color="#fafafa"
                         focusable={true}
                            style={styles.InputView}
                                l
                                onValueChange={(itemValue, itemIndex) =>
                                    setPackageType(itemValue)
                                }>
                                <Picker.Item label="Select  Package Type" value="Type" style={{color:"#cecece"}}/>
                                <Picker.Item label="Accessory" value="Accessory" />
                                <Picker.Item label="Electronics" value="Electronics" />
                                <Picker.Item label="Fragile" value="Fragile" />
                                <Picker.Item label="Clothes" value="Clothes" />
                                <Picker.Item label="Laptop" value="Laptop" />
                                <Picker.Item label="Toys" value="Toys" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                        </View>



                        <View style={styles.InputContainer}>
                            <TouchableOpacity style={styles.InputView}
                                onPress={() => navigation.navigate("PickupLocation")}
                                activeOpacity={0.7}>
                                {CurrentLocation === "" ?
                                    <Text style={styles.locationtext} >  Select Pickup Location </Text>
                                    :
                                  
                                    <Text style={styles.locationtext} >{CurrentLocation}</Text>

                                }


                            </TouchableOpacity>
                        </View>
                        <View style={styles.InputContainer}>
                            <TouchableOpacity style={styles.InputView}
                                onPress={() => navigation.navigate("DropoffLocation")}
                                activeOpacity={0.7}>
                                {Dropoff === "" ?
                                    <Text style={styles.locationtext} >  Select Dropoff Location </Text>
                                    :

                                    <Text style={styles.locationtext} >  {Dropoff} </Text>
                                }

                            </TouchableOpacity>
                        </View>
                        <View style={styles.InputContainer}>
                        <Picker
                                selectedValue={selectedVehicle}
                                mode="dropdown"
                            collapsable={true}
                         color="#000000"
                            style={styles.InputView}
                                
                                onValueChange={(itemValue) =>
                                  setselectedVehicle(itemValue)
                                }>
                                <Picker.Item label="Select  Vehicle Type" value="Type" style={{color:"#000000"}}/>
                                <Picker.Item label="Car" value="Accessory" />
                                <Picker.Item label="Bike" value="Electronics" />
                                
                            </Picker>
                        </View>

                    </View>


                    <View style={styles.BottomContainer}>

                        <View style={{ flexDirection: 'row', marginTop: 25 }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={Handlesubmit}
                            >
                                <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>Post</Text>


                            </TouchableOpacity>
                            <Dialog

                                height={250}
                                width={340}
                                dialogStyle={{ borderRadius: 10, borderTopWidth: 5, borderTopColor: "#5DD646", borderTopEndRadius: 5, borderTopStartRadius: 5, elevation: 30 }}
                                visible={visible}
                                overlayOpacity={0.7}
                                onTouchOutside={()=>setvisible(false)}

                                dialogAnimation={new SlideAnimation({
                                    slideFrom: 'bottom',
                                })}

                                dialogTitle={<DialogTitle title="Success"
                                    textStyle={{ fontWeight: "bold" }}
                                    hasTitleBar={false} />}
                            >
                                <DialogContent style={{ justifyContent: 'center', alignItems: 'center', height: 150 }}>
                                    <Text style={{ fontSize: 22 }}>Package Posted Successfully</Text>
                                    <Ionicons name="checkmark-circle" size={60} color="#1DD435" style={{ elevation: 5 }} />
                                    <DialogFooter bordered={false} style={{ bottom: 0, top: 20 }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => { setvisible(false), navigation.navigate('Pick') }}
                                        >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Thank you
                                        Let's Track It</Text>
                                        </TouchableOpacity>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </View>
                    </View>
                </View>
        </ScrollView>


    );
}

export default DropScreen