import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, NavigationService} from '../../config';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icons from '../../config/icons';
import { AdminAppStack } from '../../config/navigationConfig/AdminAppStack';
import { GlobalStyle } from '../../constants/GlobalStyle';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../../store/actions';

const More = () => {

  const user = useSelector(state => state.AuthReducer.user);
  const dispatch = useDispatch();

  const handleLogout = () =>{
    console.log('user==>', user[0].plainTextToken);
    dispatch(AuthAction.Logout(user[0].plainTextToken))
  }
  const moreData = [
    {
      id: 1,
      screenName: 'Expenses',
      onPress: () => NavigationService.navigate(AdminAppStack.Expenses.name),
    },
    {
      id: 2,
      screenName: 'Rents',
      onPress: () => NavigationService.navigate('bla'),
    },

   
    {
      id: 3,
      screenName: 'Current Rates',
      onPress: () => NavigationService.navigate(AdminAppStack.CurrentRates.name),
    },

    {
      id: 4,
      screenName: 'Logout',
      onPress: () => handleLogout()
    },

  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={item?.onPress} style={styles.dataContainer}>
        <Text
          style={[
            styles.screenName,
            {
              color:
                item?.screenName === 'Logout' ? Colors.Danger : Colors.Black,
            },
          ]}>
          {item?.screenName}
        </Text>
        <Icons.MaterialIcons
          name="keyboard-arrow-right"
          color={Colors.Black}
          size={scale(24)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScreenNameHeader title={'More'} backArrow={true} />
      <View style={{height: '5%'}} />
      <View style={GlobalStyle.padding}>
        <FlatList
          data={moreData}
          renderItem={({item}) => renderItem({item})}
          ItemSeparatorComponent={
            <View style={{height: 2, width: '95%', backgroundColor: 'grey'}} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  dataContainer: {
    padding: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenName: {
    fontSize: scale(18),
    fontFamily: Fonts.Poppins600,
    color: Colors.Black,
  },
});
