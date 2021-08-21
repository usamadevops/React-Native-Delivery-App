import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../Constants/Colors/color';
import styles from '../PickupPage/styles'
import { LinearGradient } from 'expo-linear-gradient';
import { Box } from '../../data/index';
import { RadioButton  } from 'react-native-paper';




export default function History({ navigation }) {
 const [value, setvalue] = useState("Delivered")
    return (
        <Animatable.View animation="fadeIn" style={styles.ContainerView}>
            <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
            <View style={styles.CheckBoxcontainer}>

                       
                    <RadioButton.Group
        onValueChange={value => setvalue(value)}
        value={value}
      >
           <View style={styles.section}>  
         
          <View style={styles.checkbox}>
          <RadioButton value="Delivered" />
          <Text  style={styles.box_text}>Delivered  </Text>
          </View>
          <View style={styles.checkbox}>
          <RadioButton value="InRoute" />
          <Text style={styles.box_text} >InRoute </Text>
          </View>
                </View>
      </RadioButton.Group>
        
            </View>
            <ScrollView style={{ flex: 1, marginTop: 0, height: 350, flexDirection: "column" }}>
                {Box.map((data) => (
                    <View style={styles.subcontainer}>
                        <TouchableOpacity
                     rippleColor="rgba(0, 0, 0, .32)"
                        style={styles.ClickableContainer}
                           
                        >
                            <View style={styles.imageStyle}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={data.image}
                                />
                            </View>

                            <View style={styles.Texts}>
                                <Text style={{ fontSize: 20 }}>{data.title}</Text>

                                {data.description.length > 21 ?
                                    (
                                        <Text style={{ color: "#000" }}> {data.description.substring(0, 40) + "..."}</Text>
                                    )
                                    :
                                    (
                                        <Text style={{ color: "#000" }}> {data.description} </Text>
                                    )
                                }
                            </View>
                            <View style={styles.Time}>
                                <Text style={{ fontSize: 12, textAlign: "center", color: "#000" }}>{data.time}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

        </Animatable.View>
    );
}

