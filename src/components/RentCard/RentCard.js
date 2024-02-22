import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../config';
import CustomButton from '../Buttons/CustomButton';
import CustomText from '../Text/CustomText';


const RentCard = ({item,onPressCollect}) => {
  console.log('item', item);
  return (
    <LinearGradient style={styles.container} colors={['#fe8c00', '#f83600']} >
      <View style={styles.namecontainer}>
        <CustomText.BoldText
          style={styles.text}
          textAlign="left"
          text={item?.shop_name}
        />

        <CustomButton onPress={onPressCollect} text={'Collect'} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomText.BoldText
          style={styles.text}
          textAlign="left"
          text={'Date: '}
        />

        <CustomText.BoldText
          style={styles.text}
          textAlign="left"
          text={item?.every_month_pay_date}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CustomText.BoldText
          style={styles.text}
          textAlign="left"
          text={'Amount: '}
        />

        <CustomText.BoldText
          style={styles.text}
          textAlign="left"
          text={item?.rent_amount}
        />
      </View>
    </LinearGradient>
  );
};

export default RentCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(10),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(8),
    marginVertical:verticalScale(10)
  },
  text: {
    color: Colors.White,
    fontSize: scale(14),
  },
  namecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
