import React from 'react';

import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrix, Fonts} from '../../config';

import Icons from '../../config/icons';
import CustomText from '../Text/CustomText';
import CustomButton from '../Buttons/CustomButton';
import { scale } from 'react-native-size-matters';

export default function ConfirmationModal({
  isVisible,
  onYes = () => {},
  onClose = () => {},
  header = 'Delete Post',
  body = 'Are you sure ',
  leftButtonText = 'Yes',
  rightButtonText = 'No',
  style,
}) {
  console.log('hello it opened');
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
            <TouchableOpacity style={styles.crossButton}>
              <Icons.Entypo name="cross" size={25} color={Colors.White} />
            </TouchableOpacity>

            <CustomText.HeadingText style={styles.header} text={header} />

            <View style={styles.horizontalLine}></View>

            <CustomText.HeadingText text={body} style={styles.bodyText} />

            <View style={styles.buttonsView}>
              <CustomButton
                restyleContainer={styles.restyleButton}
                onPress={onYes}
                restyleText={styles.yesTextStyle}
                // gradientStyle={styles.yesButtonGradient}
                text={leftButtonText}
              />
              <CustomButton
                restyleContainer={styles.restyleButton}
                onPress={onClose}
                restyleText={styles.cancelTextStyle}
                // firstColor={Colors.LightGray}
                // secondColor={Colors.LightGray}
                // gradientStyle={styles.cancelButtonGradient}
                text={rightButtonText}
              />
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
    backgroundColor: Colors.White,
  },

  crossButton: {
    position: 'absolute',
    backgroundColor: Colors.Secondary,
    borderRadius: Metrix.VerticalSize(20),
    padding: Metrix.VerticalSize(2),
    marginTop: Metrix.HorizontalSize(-5),
    alignSelf: 'flex-end',
  },

  header: {
    color: Colors.Secondary,
    fontFamily: Fonts.Poppins700,
    fontSize: Metrix.customFontSize(20),
    marginVertical: Metrix.VerticalSize(10),
    top:2
    // padding: Metrix.VerticalSize(10),
  },

  horizontalLine: {
    height: 1,
    borderBottomColor: Colors.LightGray,
    borderWidth: 0.2,
  },

  bodyText: {
    color: Colors.Secondary,
    fontFamily: Fonts.Poppins600,
    fontSize: Metrix.customFontSize(15),
    padding: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(5),
    textAlign: 'center',
    marginHorizontal: Metrix.HorizontalSize(7),
  },

  

  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  restyleButton: {
    marginHorizontal: Metrix.VerticalSize(10),
    width:scale(100)
  },
  yesTextStyle: {
    color: Colors.White,
    fontFamily: Fonts.Poppins600,
    fontSize:scale(12)
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
    fontSize:scale(12)
  },

  cancelButtonGradient: {
    width: Metrix.HorizontalSize(172.5),
    height: Metrix.VerticalSize(52),
    borderRadius: Metrix.VerticalSize(0),
    borderBottomRightRadius: Metrix.VerticalSize(10),
  },
});
