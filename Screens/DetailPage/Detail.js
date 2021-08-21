import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import color from '../../Constants/Colors/color';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'
import { FontAwesome5, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import Dialog, { DialogTitle, SlideAnimation, DialogFooter, DialogContent } from 'react-native-popup-dialog';
import { Alert } from 'react-native';
import { ToastAndroid } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Pick({ route, navigation }) {

  const { itemName, itemPost, itemVehicle, itemPick, itemDrop, itemTime, itemWeight } = route.params;
  const [visible, setvisible] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function schedulePushNotification() {

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Package Pickup Confirmation 📬",
        body: `${itemName}` + ' would like to Pickup your Package',
        data: { data: "Confirmation" },
      },
      trigger: { seconds: 3 },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  const OnConfirm = async () => {
    await schedulePushNotification();
    setvisible(true);
  }





  return (
    <Animatable.View animation="fadeIn" style={styles.ContainerView}>
      <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 100, width: 300, }}>
        <Image
          style={styles.tinyLogo}
          source={require("../../data/images/user.jpg")}
        />
        <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 20, fontWeight: "700" }}>{itemName}</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: "700" }}>Posted on {itemTime}</Text>
      </View>
      <View style={styles.BottomContainer}>
        <View style={styles.InformationView}>
          <View style={styles.Details}>
            <View style={styles.Icons}>
              <MaterialIcons name="description" size={30} color={color.Secondary} />
            </View>
            <Text style={styles.Text}>{itemPost}</Text>
          </View>
          <View style={styles.Details}>
            <View style={styles.Icons}>
              <FontAwesome5 name="weight" size={30} color={color.Secondary} />
            </View>
            <Text style={styles.Text}>{itemWeight}</Text>
          </View>
          <View style={styles.Details}>
            <View style={styles.Icons}>
              <Ionicons name="car-sport-sharp" size={30} color="black" />
            </View>
            <Text style={styles.Text}>{itemVehicle}</Text>
          </View>
          <View style={styles.Details}>
            <View style={styles.Icons}>
              <Entypo name="location" size={30} color="black" />
            </View>
            <Text style={styles.Text}>{itemPick}</Text>
          </View>
          <View style={styles.Details}>
            <View style={styles.Icons}>
              <Ionicons name="location" size={30} color="black" />
            </View>
            <Text style={styles.Text}>{itemDrop}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => { OnConfirm() }} >
            <Text style={styles.btntext}>Confirm Pickup</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Dialog

        height={250}
        width={300}
        dialogStyle={{ borderRadius: 10, borderTopWidth: 5, borderTopColor: "#5DD646", borderTopEndRadius: 5, borderTopStartRadius: 5, elevation: 30 }}
        visible={visible}
        overlayOpacity={0.7}

        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}

        dialogTitle={<DialogTitle title="Notification Sent to Dropper"
          textStyle={{ fontWeight: "bold" }}
          hasTitleBar={true}
          align="center" />}
      >
        <DialogContent style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}>
          <CountDown
            until={5 * 1 + 0}
            size={30}
            onFinish={() => setTimeout(() => {

              ToastAndroid.showWithGravity("Package Not Confirmed By the User Please Select Another One", ToastAndroid.SHORT,
                ToastAndroid.BOTTOM)
              setvisible(false);
              navigation.navigate("Pick")
            }, 1000)}
            digitStyle={{ backgroundColor: color.Pink }}
            digitTxtStyle={{ color: '#1CC625' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'Minutes', s: 'seconds' }}
          />
          <DialogFooter bordered={true} style={{ bottom: 0, top: 35 }}
          >

            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 20 }}>Please wait for Confirmation!!</Text>

          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Animatable.View>
  );
}
