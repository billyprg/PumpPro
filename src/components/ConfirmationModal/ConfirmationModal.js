import React from 'react';

import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors, Metrix, Fonts} from '../../config';

import Icons from '../../config/icons';
import CustomText from '../Text/CustomText';
import CustomButton from '../Buttons/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../Inputs/Input';

export default function ConfirmationModal({
  onChangeName,
  isVisible,
  onYes = () => {},
  onClose = () => {},
  header = 'Delete Post',
  leftButtonText = 'Yes',
  rightButtonText = 'No',
  style,
  control,
}) {
  return (
    <>
      <Modal
        presentationStyle="overFullScreen"
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
        style={styles.modalStyle}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            {/* <TouchableOpacity style={styles.crossButton}>
              <Icons.Entypo name="cross" size={25} color={Colors.White} />
            </TouchableOpacity> */}

            <CustomText.HeadingText style={styles.header} text={header} />

            <View style={styles.horizontalLine}></View>
            <View style={{backgroundColor: Colors.White}}>
              <TextInput
                onChangeText={onChangeName}
                style={{
                  color: Colors.Black,
                  fontSize: scale(14),
                  fontFamily: Fonts.Poppins600,
                  borderColor: Colors.Primary,
                  borderWidth: 2,
                  borderRadius: scale(8),
                  alignItems: 'center',
                  marginTop: verticalScale(20),
                  width: '90%',
                  paddingHorizontal: moderateScale(15),
                  alignSelf: 'center',
                  paddingTop:10
                  
                }}
                placeholder={'Enter Manager name'}
                multiline={true}
                textAlignVertical="top"
                textAlign="left"
                placeholderTextColor={Colors.Black}
                maxLength={150}
              />

              <View style={styles.buttonsView}>
                <CustomButton
                  restyleContainer={styles.restyleButton}
                  onPress={onYes}
                  restyleText={styles.yesTextStyle}
                  // gradientStyle={styles.yesButtonGradient}
                  text={leftButtonText}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // backgroundColor:Colors.Primary
  },

  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(98,105,143,.7)',
  },
  modalContent: {
    width: Metrix.HorizontalSize(345),
    borderRadius: Metrix.VerticalSize(10),
    backgroundColor: Colors.Primary,
  },

  header: {
    color: Colors.White,
    fontFamily: Fonts.Poppins700,
    fontSize: Metrix.customFontSize(20),
    marginVertical: Metrix.VerticalSize(10),
    top: 2,

    // padding: Metrix.VerticalSize(10),
  },

  horizontalLine: {
    height: 1,
    borderBottomColor: Colors.Yellow,
    borderWidth: 1,
  },

  bodyText: {
    color: Colors.Black,
    fontFamily: Fonts.Poppins600,
    fontSize: Metrix.customFontSize(15),
    padding: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(5),
    textAlign: 'center',
    marginHorizontal: Metrix.HorizontalSize(7),
  },

  buttonsView: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  restyleButton: {
    marginHorizontal: Metrix.VerticalSize(10),
  },
  yesTextStyle: {
    color: Colors.White,
    fontFamily: Fonts.Poppins600,
    fontSize: scale(12),
  },

  yesButtonGradient: {
    width: Metrix.HorizontalSize(172.5),
    height: Metrix.VerticalSize(52),
    borderRadius: Metrix.VerticalSize(0),
    borderBottomLeftRadius: Metrix.VerticalSize(10),
  },

  cancelTextStyle: {
    color: Colors.Secondary,
    fontFamily: Fonts.Poppins600,
    fontSize: scale(12),
  },

  cancelButtonGradient: {
    width: Metrix.HorizontalSize(172.5),
    height: Metrix.VerticalSize(52),
    borderRadius: Metrix.VerticalSize(0),
    borderBottomRightRadius: Metrix.VerticalSize(10),
  },
});
