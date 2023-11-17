import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../config';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const WrapperCom = props => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.Primary}}>
      <View
        style={{
          flex: 0.30,
          backgroundColor: Colors.Primary,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: moderateScale(20),
        }}>
        {props.headerView}
      </View>

      <View
        style={{
          flex: 0.70,
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingHorizontal: moderateScale(20),
          overflow: 'hidden',
          
        }}>
        {props.contentView}
      </View>
    </View>
  );
};

export default WrapperCom;

const styles = StyleSheet.create({});
