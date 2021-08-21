import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles';
import Header from '../../Components/Main/Header/header'
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from '../../Components/Main/ButtonsComponents/index'
import CardsModel from '../../Components/Main/Cards/Index';
const pick = require("../../Assets/res/Images/pickpackage.png");
const drop = require("../../Assets/res/Images/sendpackage.png")

// I need to Implement Cards animation to map Data


const MainPage = ({ navigation }) => {

      return (
            <View style={styles.container}>
                  {/* Down here in location I need to Implement Real Time Location of the User */}
                  <Header title="RouteWay" />
                  <LinearGradient
                        start={0, 0}
                        end={1, 1}
                        colors={["#FB5F06", "#98164E"]}
                        style={styles.LinearGradient}
                  />
                  <View style={styles.topCont}>
                        <View style={styles.TopImage}>
                              <Image style={styles.Image} source={require("../../Assets/res/Images/MainBackground.jpg")} />
                        </View>
                   
                  <View style={styles.Buttons}>
                  <ButtonCard ButtonImage={drop} ButtonName="Pick" OnPress={()=>{console.log("Drop button was pressed"),navigation.navigate('Pick')}} />
                  <ButtonCard ButtonImage={pick} ButtonName="Drop" OnPress={()=>{console.log("Pick Button  was pressed"),navigation.navigate('Drop')}}/>
                  <ButtonCard ButtonImage={pick} ButtonName="Track" OnPress={()=>{console.log("Pick Button  was pressed"),navigation.navigate('Maptab')}}/>
                  </View>
                  </View>


      
                  <View style={styles.BottomContainer}>
                        {/* Down here Will be the Function we need to Render while Checking the data on the Cards */}
            
                  <CardsModel/>

                  



                        {/*until here    we can Have A function which will say that RenderCars() or Fillcards()*/}
                  </View>

            </View>
      )
}

export default MainPage

