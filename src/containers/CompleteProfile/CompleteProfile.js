import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import WrapperCom from '../../components/WrapperComp/WrapperCom';
import {Colors, Fonts, Images, NavigationService} from '../../config';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomInput from '../../components/Inputs/Input';
import {useForm} from 'react-hook-form';
import PasswordInput from '../../components/Inputs/PasswordInput';
import CustomButton from '../../components/Buttons/CustomButton';
import {AppStack} from '../../config/navigationConfig/ManagerAppStack';
import {useDispatch} from 'react-redux';
import AuthAction from '../../store/actions/AuthAction';
import {AuthStack} from '../../config/navigationConfig/AuthStack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GlobalStyle} from '../../constants/GlobalStyle';

const CompleteProfile = ({route}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const dispatch = useDispatch();

  const userData = route?.params?.data;

  const onCompleteProfile = handleSubmit(values => {
    console.log('values==>', values);
    const data = {
      ...values,
    };
    dispatch(AuthAction.CompleteProfile(data));
  });

  return (
    <SafeAreaView style={{backgroundColor: Colors.Primary, flex: 1}}>
      <KeyboardAwareScrollView>
        <WrapperCom
          headerView={
            <View>
              <View style={{height: verticalScale(110), width: scale(110)}}>
                <Image
                  source={Images.Logo}
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
          }
          contentView={
            <View style={{backgroundColor: 'white', marginTop: '10%'}}>
              <Text style={styles.heading}>Complete Your Profile</Text>

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Pump Name"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="company_name"
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Acc No"
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="account"
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Employees"
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="totalEmployees"
                keyboardType={'numeric'}
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Employees Salary in Rs"
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="employee_salary"
                keyboardType={'numeric'}
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Expense"
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="expense"
                keyboardType={'numeric'}
              />

              <CustomButton
                text={'Continue'}
                restyleContainer={{marginTop: verticalScale(40)}}
                onPress={onCompleteProfile}
              />
            </View>
          }
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins600,
    fontSize: scale(17),
    color: Colors.Black,
  },

  orText: {
    fontFamily: Fonts.Poppins700,
    fontSize: scale(16),
    color: Colors.Black,
    textAlign: 'center',
    marginTop: verticalScale(5),
  },
  registerText: {
    fontFamily: Fonts.Poppins600,
    fontSize: scale(14),
    color: Colors.Primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
});
