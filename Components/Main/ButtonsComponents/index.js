import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'



const ButtonCard = (props) => {
      const { ButtonImage, ButtonName, OnPress } = props;
      return (


            <TouchableOpacity onPress={() => OnPress()} activeOpacity={0.6} >
                  <View style={styles.container}>
                        <Image style={styles.btnImage} source={ButtonImage} />
                        <Text style={styles.text}>{ButtonName}</Text>
                  </View>
            </TouchableOpacity>

      );
}
export default ButtonCard
