import React from 'react'
import {EvilIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import styles from './styles'
import UserLocation from '../../Location/UserLocation';


const Header = (props) => {
const {title}=props;

      return (
            <View style={styles.LeftText}>
          <Text style={styles.Text}>{title}</Text>
          <View style={styles.locationView} >
          <EvilIcons name="location" size={24} color="#212738" />
          {/* Here under the location will be the User Location */}
       <Text style={styles.location}>
             <Text>Taxila</Text>
             {/* <UserLocation /> */}
       </Text>
       </View>
            </View>
      )
}

export default Header;
