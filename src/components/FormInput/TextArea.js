import React from 'react';
import {
  TextInput,
  View,
  Text,
  TextInputProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, Metrix, Utils} from '../../config';
import styles from './styles';
import { scale } from 'react-native-size-matters';

const TextField: React.FC<TextInputProps | CustomProps> = ({
  isError = '',
  errMsg,
  inputStyle = {},
  containerStyle = {},
  reference,
  onKeyPressEvent = () => {},
  suffixIcon,
  suffixPress = () => {},
  suffixDisabled = false,
  prefixIcon,
  prefixPress = () => {},
  prefixStyle = '',
  errorStyle = '',
  disabledInput,
  placeHolderColor = Colors.InputPlaceHolder,
  label = '',
  ...props
}) => (
  <View>
    {label ? (
      <Text
        style={{
        //   marginTop: Metrix.VerticalSize(20),
          alignSelf: 'flex-start',
          textAlign:'left',
          fontSize: scale(14),
          color: Colors.DarkGray
        //   marginBottom: Metrix.VerticalSize(10),
        }}
        
       >{label}</Text>
    ) : null}
    <View
      style={[
        styles.main,
        containerStyle,
        {borderColor: errMsg || isError ? Colors.Danger : Colors.InputField},
      ]}>
      {prefixIcon && (
        <View style={[styles.prefixContainer, prefixStyle]}>{prefixIcon}</View>
      )}

      <TextInput
        style={[
          styles.inputStyle,
          inputStyle,
          {
            width:
              suffixIcon && prefixIcon
                ? '75%'
                : suffixIcon || prefixIcon
                ? prefixStyle
                  ? '70%'
                  : '85%'
                : '100%',
          },
        ]}
        ref={reference}
        editable={!disabledInput}
        selectionColor={Colors.White}
        onKeyPress={e => onKeyPressEvent(e.nativeEvent.key)}
        placeholderTextColor={placeHolderColor}
        maxLength={100}
        {...props}
      />
      {suffixIcon && (
        <TouchableOpacity
          disabled={suffixDisabled}
          onPress={suffixPress}
          style={styles.suffixContainer}>
          {suffixIcon}
        </TouchableOpacity>
      )}
    </View>
    {errMsg ? (
      <Text style={[styles.errMsgStyle, errorStyle]}>{errMsg}</Text>
    ) : null}
  </View>
);

interface CustomProps {
  errMsg: String;
  containerStyle: StyleSheet;
  inputStyle: StyleSheet;
  reference: Function;
  onKeyPressEvent: Function;
  suffixPress: Function;
  suffixDisabled: Boolean;
  prefixPress: Function;
  prefixIcon: Image;
  suffixIcon: Image;
}

TextField.defaultProps = {
  errMsg: '',
  placeholder: '',
  returnKeyType: 'default',
  underlineColorAndroid: Colors.Transparent,
  // placeholderTextColor: Colors.PlaceHolder(),
  // selectionColor: Colors.Primary,
  keyboardAppearance: 'dark',
  onChangeText: () => {},
  inputStyle: {},
  containerStyle: {},
};

export default React.memo(TextField);
