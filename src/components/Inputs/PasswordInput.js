import React, {forwardRef,useState} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, TextInput, View,Text} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../config';

const PasswordInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  const [password,setPassword] = useState(true)
  return (

    <>
    {props.uppertrue ? (
      <View style={{marginTop: verticalScale(25)}}>
        <Text style={[styles.UpperText, props.restyleUpperText]}>
          {props.upperText}
        </Text>
      </View>
    ) : null}

    <View style={[styles.smallbox, props.boxStyle]}>
      {props.FontAwesome ? (
        <FontAwesome
          name={props.FontAwesome_Name}
          size={props.size}
          color={props.iconcolor ? props.iconcolor : Colors.White}
        />
      ) : null}
        <Fontisto
          name={'unlocked'}
          size={scale(20)}
          color={props.iconcolor ? props.iconcolor : Colors.White}
        />
      <TextInput
        onFocus={props.onFocus}
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={ Colors.placeholderTextColor}
        style={[styles.InputStyles, props.restyleText]}
        secureTextEntry={password}
        keyboardType={'default'}
        textAlignVertical={props.textAlignVertical}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={props.placeholderStyle}
        fontSize={props.fontSize}
        maxLength={props.maxLength}
      />
      <Text style={styles.Text} onPress={() => setPassword(!password)}>{password ?  'Show' : 'Hide'}</Text>
    </View>
    </>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '80%',
    height: '100%',
    color: Colors.Black,
    // fontFamily: Font.Gilroy500,
    fontSize: scale(1),
    paddingHorizontal: moderateScale(10),
  },
  UpperText:{
    // fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: verticalScale(20),
    width: '100%',
    paddingHorizontal: moderateScale(15),
    height: verticalScale(50),
    // backgroundColor: '#w',
    // borderWidth: scale(1),
    borderColor: Colors.InputContainer,
    borderRadius: scale(10),
  },
  Text:{
    color: Colors.placeholderTextColor,
    // fontFamily:Font.Gilroy600,
    fontSize:scale(15)
  }
});
export default PasswordInput;


