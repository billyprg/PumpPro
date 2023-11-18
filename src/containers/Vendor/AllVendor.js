import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import CustomText from '../../components/Text/CustomText';
import VendorCard from '../../components/Cards/VendorCard/VendorCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Icons, NavigationService} from '../../config';
import { AppStack } from '../../config/navigationConfig/AppStack';

const AllVendor = () => {
    
 const data = [
    {
      id: 1,
      vendorName: 'PSO',
      contactPerson: 'Ali',
      contactNo: '03152470237',
      accNo: '9933015776',
    },
  ];

  const handleAddVendor = () =>{
    // NavigationService.navigate(AppStack.Hom)
  }
  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.paddingFlex}>
        <CustomText.HeadingText textAlign={'left'} text={'All Vendors'} />

        <Pressable
        onPress={handleAddVendor}
          style={{
            backgroundColor: Colors.Primary,
            borderRadius: scale(10),
            paddingHorizontal: moderateScale(15),
            paddingVertical: verticalScale(5),
            flexDirection:'row',
            alignItems:'center',
            marginVertical:verticalScale(20)
          }}>
            <Icons.AntDesign name='plus' color={Colors.White} size={scale(18)} style={{marginHorizontal:verticalScale(2)}}/>
          <CustomText.LightText
            text={'Add New Vendor'}
            color="white"
            textAlign="left"
          />
        </Pressable>

        <FlatList
          data={data}
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
      </View>
    </View>
  );
};

export default AllVendor;

const styles = StyleSheet.create({});
