import React, {forwardRef, useState} from 'react';
import {useController} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../config';
const CustomInput = forwardRef((props, ref) => {
  const [characterCount, setCharacterCount] = useState(0);

  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <>
      {props.upperText ? (
        <View style={[{marginTop: verticalScale(25)}, props.RestyleUpperView]}>
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
            color={props.iconcolor ? props.iconcolor : Colors.ThemeBlue}
          />
        ) : null}

        {props.IonIcons ? (
          <IonIcons
            name={props.IonIcons_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.ThemeBlue}
          />
        ) : null}
        {props.MaterialCommunityIcons ? (
          <MaterialCommunityIcons
            name={props.MaterialIcons_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.ThemeBlue}

          />
        ) : null}
        {props.Feather ? (
          <Feather
            name={props.Feather_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.ThemeBlue}
          />
        ) : null}
        {props.Fontisto ? (
          <Fontisto
            name={props.Fontisto_Name}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.ThemeBlue}
          />
        ) : null}
        <TextInput
          onFocus={props.onFocus}
          textContentType={props.textContentType}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.placeholderTextColor}
          style={[styles.InputStyles, props.restyleText]}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          textAlignVertical={props.textAlignVertical}
          pattern={props.pattern}
          label={props.label}
          placeholderStyle={props.placeholderStyle}
          fontSize={props.fontSize}
          maxLength={props.maxLength}
        />
        {props.search ? (
          <Feather
            name={'search'}
            onPress={props.onPressLocation}
            size={props.size}
            color={props.iconcolor ? props.iconcolor : Colors.SearchBar}
            style={{alignSelf: 'center', marginRight: moderateScale(10)}}
          />
        ) : null}
        {props.send ? (
          <TouchableOpacity
            onPress={props.sendPress}
            style={{alignSelf: 'center', marginRight: moderateScale(10)}}>
            <Feather name={'send'} size={props.size} color={'#18516E'} />
          </TouchableOpacity>
        ) : null}
     
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  UpperText: {
    // fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
    fontFamily: Fonts.Poppins600
  },
  InputStyles: {
    flex: 1,
    // height: '100%',
    color: Colors.Black,
    // fontFamily: Fonts,
  },

  smallbox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(20),
    width: '100%',
    paddingHorizontal: moderateScale(15),
    height: verticalScale(50),
    borderColor: Colors.InputContainer,
    borderRadius: scale(10),
  },
  
});
export default CustomInput;
