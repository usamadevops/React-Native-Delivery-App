import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet,  } from 'react-native'
import { Entypo,MaterialIcons  } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import color from '../../Constants/Colors/color'
import MapView from 'react-native-maps'
import MapConfig from '../../Constants/Mapconfig'
import { Dimensions } from 'react-native';
import ApiKey from "../../Constants/Apikey"
import * as Location from 'expo-location';
import { TouchableRipple } from 'react-native-paper';

export default class PickupLocation extends Component {
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
                      
                        </MapView>

                        <View style={{ top: '2.5%', bottom: '0%', marginHorizontal: 20, position: "absolute" }}>
                     <TouchableRipple
                     rippleColor="#c4c4c4"
                     onPress={()=>this.props.navigation.popToTop ()}
                     >
                     <MaterialIcons name="arrow-back" size={24} color="#000"/>
                     </TouchableRipple>
                            
                        </View>
                  </View>
            )
      }
}

const styles = StyleSheet.create({

     
})