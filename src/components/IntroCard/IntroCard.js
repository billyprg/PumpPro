import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Colors, Fonts } from '../../config';


const IntroCard = (props) => {
  return (
    <View style={styles.main}>
      <Text style={[styles.mainText]}>
      {props.mainText}
      </Text>
      <Text style={styles.text}>
      {props.subText}
      </Text>
    </View>
  );
};

export default IntroCard;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: Colors.White,
    borderRadius: scale(10),
    padding: scale(10),
    // borderColor: 'gold',
    // borderWidth: 2,
  },
  mainText: {
    color: 'white',
    fontSize: scale(22),
    textAlign: 'center',
    fontFamily: Fonts.Poppins700
  },

  text: {
    color: 'white',
    fontSize: scale(14),
    textAlign: 'center',
    fontFamily: Fonts.Poppins400
  },
});
