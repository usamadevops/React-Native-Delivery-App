import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import color from '../Constants/Colors/color'
import MapView, { Marker } from 'react-native-maps'
import MapConfig from '../Constants/Mapconfig'
import { Dimensions } from 'react-native';
import ApiKey from '../Constants/Apikey'
import * as Location from 'expo-location';
export default class  DropoffLocation extends Component {
    
      state = {
            region: {
                  latitude: 33.874549,
                  longitude: 72.8162761,
                  latitudeDelta: 0.22,
                  longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height
            },
            marginBottom: 1,
            locationChosen: false,
            CurrentLocation: ' ',
            city: ''
      }





      updatedLocation =region => {
            this.setState({
                  region
            })
            this.getAddress(this.state.region.latitude,this.state.region.longitude);
      }



// This is Only For user Current Location Not the Pin point Updated Location
      handleuserLocation = () => {

            navigator.geolocation.getCurrentPosition(pos => {
                  this.map.animateToRegion({
                        ...this.state.region,
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                  })
                  this.setState({
                        region: {
                              ...this.state.region,
                              latitude: pos.coords.latitude,
                              longitude: pos.coords.longitude
                        },
                        locationChosen: true
                  })
            },
                  err => {
                        console.log(err);
                        alert("something went wrong");
                  })

      }

      componentDidMount() {
           this.handleuserLocation();
            setTimeout(() => this.setState({ marginBottom: 0 }), 100)
            
      }
 

      getAddress = async (lat, lng) => {
            Location.setGoogleApiKey(ApiKey)
            try {

                  let res = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lng }, { useGoogleMaps: true })
                  console.log(res);
                  let Address = res[0].name.concat(" " + res[1].name).concat (","+res[0].region)
                  let city = res[0].city
                  this.setState({
                        CurrentLocation: Address,
                        city: city
                  })
                  this.mark.showCallout();
            }
            catch (err) { console.log(err) }

      }

      onChangeValue = CurrentLocation=> {

            this.setState({
                  CurrentLocation
            })

      }

      render() {
            let marker =
                  <View style={{ top: '37%', bottom: '50%', marginLeft: 153, marginTop: 40, position: "absolute", zIndex: 100 }}>
                        <Marker
                      style={{zIndex:10000}}
                              coordinate={this.state.region}
                              title={this.state.CurrentLocation}
                              description={this.state.city}
                              ref={ref => this.mark = ref}
                        
                        >
                        </Marker>
                  </View>
            return (
                  <View style={{ flex: 1 }}>

                        <MapView
                              style={{ flex: 1, marginBottom: this.state.marginBottom }}
                              showsMyLocationButton={true}
                              showsUserLocation={true}
                              customMapStyle={MapConfig}
                              initialRegion={this.state.region}
                              onRegionChange={this.onChangeValue}
                              zoomControlEnabled={true}
                              followsUserLocation={true}
                              onRegionChangeComplete={this.updatedLocation}
                              ref={map => {
                                    this.map = map;
                              }}>
                              {marker}
                        </MapView>

                        <View style={{ top: '90%', bottom: '0%', marginHorizontal: 30, position: "absolute" }}>
                              <LinearGradient colors={['#32CD32', '#00FF00']} style={styles.button}>
                                    <TouchableOpacity
                                          style={{ zIndex: 1000 }}
                                          onPress={() => {this.props.navigation.navigate("Drop",{Dropoff:this.state.CurrentLocation});}}>
                                          <Text style={styles.btntext}>
                                                Confirm Dropoff Location
      </Text>
                                    </TouchableOpacity>
                              </LinearGradient>
                        </View>
                  </View>
            )
      }
}

const styles = StyleSheet.create({

      btntext: {
            fontSize: hp("2%"),
            color: color.Pink,
      },
      button:
      {
            height: hp("6.5%"),
            width: wp("70%"),
            backgroundColor: color.Primary,
            shadowColor: color.Shadow,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 0,

      },
})