import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../Text/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../config';

const PurchaseCard = ({item}) => {
  console.log('item', item)
  return (
    <LinearGradient style={styles.container} colors={['#fe8c00', '#f83600']}>
      <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.name}
      />
      <CustomText.BoldText
        style={styles.text}
        textAlign="left"
        text={item?.demand}
      />
    </LinearGradient>
  );
};

export default PurchaseCard;

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
