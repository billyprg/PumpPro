import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, NavigationService} from '../../../config';
import {GlobalStyle} from '../../../constants/GlobalStyle';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ScreenNameHeader from '../../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import Icons from '../../../config/icons';

const AdminMore = () => {
  const moreData = [
    {
      id: 1,
      screenName: 'Expenses',
      onPress: () => NavigationService.navigate('bla'),
    },
    {
      id: 2,
      screenName: 'Rents',
      onPress: () => NavigationService.navigate('bla'),
    },

    {
      id: 3,
      screenName: 'Logout',
      onPress: () => NavigationService.navigate('bla'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.dataContainer}>
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

export default AdminMore;

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
