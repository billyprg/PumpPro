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

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const dispatch = useDispatch();

  const onLogin = handleSubmit(values => {
    console.log('values==>', values);
    const data = {
      // fcmToken: null,
      // platform: 'App',
      ...values,
    };
    dispatch(AuthAction.SignIn(data));
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
              <Text style={styles.heading}>Login to continue</Text>
              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Email"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="email"
              />

              <PasswordInput
                restyleText={{marginLeft: moderateScale(-15)}}
                boxStyle={{
                  marginTop: verticalScale(30),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Password"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="password"
                // rules={{
                //   required: 'Title is required',
                // }}
                maxLength={20}
              />

              <PasswordInput
                restyleText={{marginLeft: moderateScale(-15)}}
                boxStyle={{
                  marginTop: verticalScale(30),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Confirm Password"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="confirmPassword"
                // rules={{
                //   required: 'Title is required',
                // }}
                maxLength={20}
              />

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
                name="pumpName"
                // rules={{
                //   required: 'Title is required',
                // }}
                // maxLength={20}
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Employees"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="totalEmployees"
                keyboardType={'numeric'}
                // rules={{
                //   required: 'Title is required',
                // }}
                // maxLength={20}
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Employees Salary in Rs"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="employeesSalary"
                keyboardType={'numeric'}
                // rules={{
                //   required: 'Title is required',
                // }}
                // maxLength={20}
              />

              <CustomInput
                boxStyle={{
                  marginTop: verticalScale(20),
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                }}
                placeholder="Total Rent Amount"
                // uppertrue
                // upperText={'Email'}
                fontSize={scale(16)}
                size={scale(24)}
                control={control}
                name="rentAmount"
                keyboardType={'numeric'}
                // rules={{
                //   required: 'Title is required',
                // }}
                // maxLength={20}
              />

              <CustomButton
                text={'Continue'}
                restyleContainer={{marginTop: verticalScale(40)}}
                onPress={onLogin}
              />
            </View>
          }
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
