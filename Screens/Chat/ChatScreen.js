import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import color from '../../Constants/Colors/color';

import { LinearGradient } from 'expo-linear-gradient';
import { Chats } from '../../data/Chats';
import styles from './styles'
const ChatScreen=({ navigation })=>
{
      return(
            <Animatable.View animation="fadeIn" style={styles.ContainerView}>
              <LinearGradient start={0, 0} end={1, 1} colors={[color.Orange, color.Pink]} style={styles.LinearGradient} />
              <ScrollView style={{ flex: 1, marginTop: 10, height: 350, flexDirection: "column" }}>
                {Chats.map((user,index) => (
                    <View style={styles.subcontainer}>
                        <TouchableOpacity
                        activeOpacity={0.95}
                            key={index} style={styles.ClickableContainer}
                            onPress={() => navigation.navigate('ChatMessages', {
                            UserId:user.userId,
                            Username:user.username,
                            UserAvatar:user.userImage,
                            })} 
                        >
                            <View style={styles.imageStyle}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={user.userImage}
                                />
                            </View>

                            <View style={styles.Texts}>
                                <Text style={{ fontSize: 16 }}>{user.username}</Text>

                                {user.userLastMessage.length > 27 ?
                                    (
                                        <Text style={{ color: "#707070" }}> {user.userLastMessage.substring(0, 30) + "..."}</Text>
                                    )
                                    :
                                    (
                                        <Text style={{ color: "#707070" }}> {user.LastMessageDate} </Text>
                                    )
                                }
                            </View>
                            <View style={styles.Time}>
                                <Text style={{ fontSize: 12, textAlign: "center", color: "#20E" }}>{user.LastMessageDate}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            </Animatable.View>
      );
}
export default ChatScreen;