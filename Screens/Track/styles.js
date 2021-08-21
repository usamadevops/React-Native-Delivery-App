import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
      container:
     {
        flex: 1,
      },
      maps: 
      {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
      },
    });
    export default styles;