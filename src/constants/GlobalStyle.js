import {
    moderateScale,
    moderateVerticalScale,
    scale,
    verticalScale,
  } from 'react-native-size-matters';
  import { StyleSheet } from 'react-native';
import { Colors } from '../config';
  
  export const GlobalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.containerColor,
    },

    padding:{
        paddingHorizontal:moderateScale(20)
    }
,
paddingFlex:{
    paddingHorizontal:moderateScale(20),
    flex:1
},
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
   
   
  });