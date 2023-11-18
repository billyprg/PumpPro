import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {useNavigation} from '@react-navigation/native';
import {Images, NavigationService} from '../../config';
import IntroCard from '../../components/IntroCard/IntroCard';
import CustomButton from '../../components/Buttons/CustomButton';
import * as Animatable from 'react-native-animatable';

const OnBoarding = () => {
  const navigation = useNavigation();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 1500);
  }, []);

  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF5013',
        paddingHorizontal: moderateScale(20),
      }}>
      <View
        style={{
          height: Dimensions.get('window').width,
          width: Dimensions.get('window').width - verticalScale(25),
          alignSelf: 'center',
        }}>
        <Animatable.Image
          iterationDelay={3000}
          duration={2500}
          animation="bounceInDown"
          source={Images.Station}
          resizeMode="contain"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <Animatable.View
        iterationDelay={3500}
        duration={1500}
        animation="bounceInLeft"
        style={{}}>
        <IntroCard
          mainText={'Welcome to PetrolPro360!'}
          subText={
            ' Effortlessly manage your petrol station, track fuel sales, and optimize your revenue.'
          }
        />
      </Animatable.View>

      {showButton && (
       <Animatable.View
       iterationDelay={1000}
       duration={1500}
       animation="flipInY"
       style={{flex: 1, justifyContent: 'center'}}>
       <CustomButton
         text={'Continue'}
         restyleContainer = {{marginVertical:0,backgroundColor:'red'}}
         onPress={() => NavigationService.replace('OnBoardingTwo')}
       />
     </Animatable.View>
      )}
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
