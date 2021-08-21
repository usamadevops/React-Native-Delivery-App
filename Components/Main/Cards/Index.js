import React from 'react'
import { Text, TouchableOpacity, View,Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Data from './Data'


class CardsModel extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  index: 0,
                  total: Data.length,
                  anyselected: false,
            }
            this.nextCard = this.nextCard.bind(this);
      }
      componentDidMount() {
            this.animatedWidth = new Animated.Value(50)
            this.animatedHeight = new Animated.Value(100)
            let { index } = this.state;
            this.pushData(index);
      }

      pushData(index) {
            this.setState({
                  index: this.state.index+1,
                  question: Data[index].text,
                  lefticon: Data[index].leftIcon,
                  righticon: Data[index].RightIcon,
            });
      }

      nextCard() {
            let { index, total} = this.state;
            if(index<total)
                 this.pushData(index)   
                
      }
      render() {

            let {  question, lefticon, righticon } = this.state;
    
            return (
          
                  <View style={styles.container}>
                        <View style={styles.textView}>
                              <Text style={styles.text}> {question}</Text>
                        </View>
                        <View style={styles.Icons}>
                        
                              <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={this.nextCard}
                              >
                                    <MaterialCommunityIcons name={lefticon} size={60} color="black" />
                              </TouchableOpacity>

                              <TouchableOpacity
                                    activeOpacity={0.1}
                                    onPress={this.nextCard}

                              >
                                    <Ionicons name={righticon} size={60} color="black" />
                              </TouchableOpacity>
                          
                  </View>
                  </View>

                  
            );
      }
}
export default CardsModel


