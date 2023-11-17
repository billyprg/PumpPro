import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../../config';

const InventoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.typeView}>
        <Text style={styles.textOne}> {item?.type}</Text>
      </View>
      <View style={styles.quantityView}>
        <Text style={styles.textTwo}> {item?.quantity}</Text>
      </View>
    </View>
  );
};

export default InventoryCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // backgroundColor: Colors.Primary,
    borderRadius: scale(10),
    // paddingHorizontal: moderateScale(10),
    overflow:'hidden'
  },
  typeView:{
    backgroundColor:Colors.Primary,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:moderateScale(20)

  },
  textOne:{
    fontFamily:Fonts.Poppins600,
    fontSize:scale(14),
    color:Colors.White
  },
  quantityView:{
    backgroundColor: '#F3F6FF',
    alignItems:'center',
    justifyContent:'center',
    

  },
  textTwo:{
    fontFamily:Fonts.Poppins400,
    fontSize:scale(14),
    color:Colors.Black
  }
});
