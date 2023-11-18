import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../Text/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Colors } from '../../../config';

const VendorCard = ({item}) => {
  return (
    <LinearGradient style={styles.container} colors={['#fe8c00', '#f83600']}>
     
      <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.vendorName}
      />
        <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.contactNo}
      />
      <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.contactPerson}
      />
    
        <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.accNo}
      />
    </LinearGradient>
  );
};

export default VendorCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(10),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(8),
  },
  text: {
    color: Colors.White,
    fontSize: scale(14),
  },
});
