import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts, Images} from '../../../config';

const BalanceCard = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.MainBox, props.restyleMain]}>
      <View style={styles.headerView}>
        <View style={styles.imageView}>
          <Image
            source={Images.Shell}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.pumpName}>Pump Name</Text>
      </View>

      <View style={styles.balanceView}>
      <Text style={styles.balTitle}>Total Revenue</Text>
        <Text style={styles.BalText}>125,0000 Rs</Text>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  MainBox: {
    borderRadius: scale(20),
    overflow: 'hidden',
    backgroundColor: 'red',
  },

  headerView: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems:'center',
    paddingVertical: verticalScale(10),
    backgroundColor:'grey'
  },

  pumpName:{
    marginLeft: moderateScale(10),
    fontFamily: Fonts.Poppins600,
    color: Colors.White,
    fontSize: scale(16)
  },
  imageView: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(100),
    overflow: 'hidden',
    borderColor:'black',
    borderWidth:1,
    padding:scale(2),
    backgroundColor:'white'
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  balanceView: {
    backgroundColor: '#FFC403',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(10),
  },
  balTitle: {
    fontFamily: Fonts.Poppins700,
    fontSize: scale(15),
    color: Colors.White,
    // marginTop:verticalScale(10)
  },

  BalText: {
    fontFamily: Fonts.Poppins800,
    fontSize: scale(30),
    color: Colors.White,
    // marginTop:verticalScale(10)
  },

});
