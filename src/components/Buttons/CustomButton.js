import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

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
    backgroundColor: 'red',
    borderRadius: scale(12),
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '700'
  },
});
