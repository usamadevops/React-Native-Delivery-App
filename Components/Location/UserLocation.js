import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';


function UserLocation() {

      const [location, setLocation] = useState("");
      const [errorMsg, setErrorMsg] = useState("");
      const [API, setAPI] = useState("");
      // const [city, setcity] = useState(null)
      // const [Address,setAddress]=null
      useEffect(() => {
            async () => {
                  let { status } = await Location.requestPermissionsAsync(); //Here Get the Persmissions from the user for the Location  Services
                  if (status !== 'granted') {
                        setErrorMsg('Permission to access location was denied');
                        return; //return nothing on rejection
                  }
                  // let API = await Location.setGoogleApiKey('AIzaSyCNAhbtOWnuhzqVU1b5udfyxXN5U1IEw6E');
                  // setAPI(API);
                  const location = await Location.getCurrentPositionAsync({ Accuracy: 4 });
                  setLocation(location);

                  let Address = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude},{useGoogleMaps:true})
                  let city = Address.map(item => {
                        return item.city;
                  })
                  setcity(city);
                  setAddress(Address);
                  console.log(location);
            };
      });



      let text = 'Your Location';
      if (errorMsg) {
            text = errorMsg;
      } else if (city) {
            text = JSON.stringify(location).replace(/^["'](.+(?=["']$))["']$/, '$1');
      }
      return (
            <View style={{
                  flex: 1,
                  justifyContent: "center",
            }}>
                  <Text style={styles.paragraph}>{text}</Text>
            </View>
      );
}
export default UserLocation;