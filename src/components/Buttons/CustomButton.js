import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Colors, Fonts } from '../../config';

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.main,props.restyleContainer]} onPress={props.onPress}>
      <Text style={[styles.text,props.restyleText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.Primary,
    borderRadius: scale(10),
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:verticalScale(15)
  },

  text: {
    color: Colors.White,
    fontSize: scale(16),
    fontFamily: Fonts.Poppins700
  },
});
