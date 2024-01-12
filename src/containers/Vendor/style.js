import {Platform, StyleSheet} from 'react-native';
import metrix from '../../config/metrix';
import {Colors, Fonts, Metrix} from '../../config';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
    
  },
  inputStyle: {
    marginTop: 0,
    marginVertical: verticalScale(25),
    borderWidth: 1,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
  },

  crossIcon: {
    position: 'absolute',
    right: 10,
    top:-20,
    borderColor:Colors.White,
    backgroundColor:Colors.White,
    borderRadius: 100,
   
  },
});

export default styles;
