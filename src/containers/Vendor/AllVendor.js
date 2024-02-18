import {FlatList, Pressable, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import CustomText from '../../components/Text/CustomText';
import VendorCard from '../../components/Cards/VendorCard/VendorCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Icons, Metrix, NavigationService} from '../../config';
import {AppStack} from '../../config/navigationConfig/ManagerAppStack';
import BottomSheet from '../../components/RBSheet/RBSheet';
import CustomInput from '../../components/Inputs/Input';
import {useForm} from 'react-hook-form';
import styles from './style';
import CustomButton from '../../components/Buttons/CustomButton';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import { useDispatch, useSelector } from 'react-redux';
import { ManagerAppAction } from '../../store/actions';

const AllVendor = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  const user = useSelector(state => state.AuthReducer.user);
  const [addVendorSheet, showAddVendorSheet] = useState(false);
  const dispatch = useDispatch();
  
  const vendorList = useSelector(state => state.ManagerAppReducer.vendors);

  const getVendors = () =>{
    console.log('user?.access_token?.plainTextToken', user?.access_token?.plainTextToken)
    const payload = {
      'token': user?.access_token?.plainTextToken
    }
   dispatch(ManagerAppAction.GetVendor(payload))
  }

  console.log('vendorList====>>', vendorList)
  const onPressAdd = data => {
    console.log('data===+>', data);
    const payload = {
      ...data,
      'token': user?.access_token?.plainTextToken
    }
    dispatch(ManagerAppAction.AddVendor(payload),()=>{
      getVendors()
      showAddVendorSheet(false);
    })
    

  };

  useEffect(() => {
    getVendors()
  }, [])
  

  const data = [
    {
      id: 1,
      vendorName: 'PSO',
      contactPerson: 'Ali',
      contactNo: '03152470237',
      accNo: '9933015776',
    },
  ];

  const AddVendorBottomSheet = () => {
    return (
      <BottomSheet
        bottomSheetVisible={addVendorSheet}
        onCloseReq={() => {
          showAddVendorSheet(false);
        }}
        bottomSheetContainerStyle={{backgroundColor: Colors.Primary}}
        children={
          <View style={styles.container}>
            <View style={{backgroundColor: 'red', bottom: 10, right: -10}}>
              <Icons.Entypo
                name="cross"
                size={Metrix.VerticalSize(25)}
                color={Colors.Primary}
                style={styles.crossIcon}
                onPress={() => showAddVendorSheet(false)}
              />
            </View>
            <View style={{height: 15}} />
            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Account Title"
              fontSize={scale(16)}
              control={control}
              name="account_title"
              maxLength={20}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Contact Person"
              fontSize={scale(16)}
              control={control}
              name="contact_person"
              maxLength={20}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Contact Email"
              fontSize={scale(16)}
              control={control}
              name="email"
              maxLength={20}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Contact. No"
              keyboardType={'numeric'}
              fontSize={scale(16)}
              control={control}
              name="phone"
              maxLength={12}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Acc or IBAN no."
              fontSize={scale(16)}
              control={control}
              name="account_no"
              maxLength={20}
            />

            <CustomButton
              restyleContainer={{
                marginVertical: Metrix.VerticalSize(40),
                backgroundColor: Colors.Yellow,
              }}
              text={'Add'}
              onPress={handleSubmit(onPressAdd)}
            />
          </View>
        }
      />
    );
  };

  const handleAddVendor = () => {
    showAddVendorSheet(true);
    // NavigationService.navigate(AppStack.Hom)
  };
  return (
    <View style={GlobalStyle.container}>
      <ScreenNameHeader backArrow={true} title={'All Vendors'} />
      <View style={GlobalStyle.paddingFlex}>
        <Pressable
          onPress={handleAddVendor}
          style={{
            backgroundColor: Colors.Primary,
            borderRadius: scale(10),
            paddingHorizontal: moderateScale(15),
            paddingVertical: verticalScale(5),
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: verticalScale(20),
          }}>
          <Icons.AntDesign
            name="plus"
            color={Colors.White}
            size={scale(18)}
            style={{marginHorizontal: verticalScale(2)}}
          />
          <CustomText.LightText
            text={'Add New Vendor'}
            color="white"
            textAlign="left"
          />
        </Pressable>

        <FlatList
          data={vendorList}
          contentContainerStyle={{paddingBottom: verticalScale(5)}}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: verticalScale(8),
              }}
            />
          )}
          renderItem={({item}) => <VendorCard item={item} />}
        />
        <AddVendorBottomSheet />
      </View>
    </View>
  );
};

export default AllVendor;
