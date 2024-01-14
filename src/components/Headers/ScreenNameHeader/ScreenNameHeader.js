import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, NavigationService} from '../../../config';
import {moderateScale, scale} from 'react-native-size-matters';
import Icons from '../../../config/icons';

const ScreenNameHeader = ({title, backArrow}) => {
  return (
    <View style={styles.container}>
      {backArrow ? (
        <Icons.MaterialIcons
          name="arrow-back-ios-new"
          size={scale(20)}
          color={Colors.White}
          onPress={()=>NavigationService.goBack()}
        />
      ) : null}

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: Colors.White,
            fontFamily: Fonts.Poppins600,
            fontSize: scale(24),
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ScreenNameHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
  },
});
