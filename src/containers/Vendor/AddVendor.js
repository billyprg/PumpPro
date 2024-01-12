import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../components/Text/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../components/Inputs/Input';
import {useForm} from 'react-hook-form';
import {Colors} from '../../config';
import CustomButton from '../../components/Buttons/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from '../../components/RBSheet/RBSheet';

const AddVendor = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const [addVendorSheet, showAddVendorSheet] = useState(false);

  const BottomSheetData = [
    {
      title: 'Vendor Name',
    },
    {
      title: 'Purchase',
    },
    {
      title: 'Contact Person',
    },

    {
      title: 'Account No.',
    },
  ];

  const AddVendorBottomSheet = () => {
    console.log('its working');
    <BottomSheet
      bottomSheetVisible={addVendorSheet}
      onCloseReq={() => {
        showAddVendorSheet(false);
      }}
      children={
        <View style={GlobalStyle.padding}>
          <Text style={{color:'black'}}> HOLÆ</Text>
        </View>
      }
    />;
  };

  return (
    <View style={GlobalStyle.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View style={GlobalStyle.paddingFlex}>
          <CustomText.HeadingText
            textAlign={'left'}
            text={'Add a New Vendor'}
          />
          <View style={styles.content}>
            <CustomInput
              upperText={'Vendor Name'}
              boxStyle={{
                marginTop: verticalScale(5),
                borderWidth: 1,
                borderColor: Colors.Primary,
              }}
              placeholder="Enter Vendor name.."
              // uppertrue
              // upperText={'Email'}
              fontSize={scale(14)}
              size={scale(24)}
              control={control}
              name="email"
              // rules={{
              //   required: 'Title is required',
              // }}
              maxLength={20}
            />

            <CustomInput
              upperText={'Supply Type'}
              boxStyle={{
                marginTop: verticalScale(5),
                borderWidth: 1,
                borderColor: Colors.Primary,
              }}
              placeholder="Enter Supply type.."
              // uppertrue
              // upperText={'Email'}
              fontSize={scale(14)}
              size={scale(24)}
              control={control}
              name="email"
              // rules={{
              //   required: 'Title is required',
              // }}
              maxLength={20}
            />

            <CustomButton text={'ADD'} />
          </View>
          <AddVendorBottomSheet/>
        </View>


      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddVendor;

const styles = StyleSheet.create({
  content: {
    marginVertical: verticalScale(20),
  },
  text: {
    color: Colors.White,
    fontSize: scale(14),
  },
});
