import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
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
import { AuthStack } from '../../config/navigationConfig/AuthStack';

const Login = () => {
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
            MaterialCommunityIcons
            iconcolor={Colors.Primary}
            MaterialIcons_Name={'email'}
            restyleText={{marginLeft: moderateScale(10)}}
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
            // rules={{
            //   required: 'Title is required',
            // }}
            // maxLength={20}
          />

          <PasswordInput
            MaterialCommunityIcons
            iconcolor={Colors.Primary}
            restyleText={{marginLeft: moderateScale(10)}}
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

          <CustomButton
            text={'Continue'}
            restyleContainer={{marginTop: verticalScale(40)}}
            onPress={onLogin}
          />

          <View>
            <Text style={styles.orText}>Or</Text>
          </View>
          <Pressable onPress={()=>NavigationService.navigate(AuthStack.Register.name)}>
            <Text style={styles.registerText}>Register Now</Text>
          </Pressable>
        </View>
      }
    />
  );
};

export default Login;

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
