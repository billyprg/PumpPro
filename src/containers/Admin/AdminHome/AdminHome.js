import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BalanceCard from '../../../components/Cards/BalanceCard/BalanceCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts, NavigationService} from '../../../config';
import InventoryCard from '../../../components/Cards/InventoryCard/InventoryCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from '../../../config/icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {GlobalStyle} from '../../../constants/GlobalStyle';
import {AppStack} from '../../../config/navigationConfig/ManagerAppStack';
import ScreenNameHeader from '../../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import {AdminAppStack} from '../../../config/navigationConfig/AdminAppStack';
import GraphComponent from '../../../components/Graph/GraphComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AdminAppAction, CommonAction} from '../../../store/actions';
import OtherFunctions from '../../../config/util/HelperFunctions/OtherFunctions';
import Loader from '../../../components/Loader';
import LiquidProgress from '../../../components/TankContainer/TankContainer';
import LinearGradient from 'react-native-linear-gradient';

const AdminHome = () => {
  const dispatch = useDispatch();
  const [filterGraph, setFilterGraph] = useState('monthly');
  const user = useSelector(state => state.AuthReducer.user);
  const salesData = useSelector(state => state.CommonReducer.sales);
  const loading = useSelector(state => state.CommonReducer.loader);
  const revenue = useSelector(state => state.AdminAppReducer.revenue);
  const [graphData, setGraphData] = useState(['100', '200', '3500', '4500']);
  const futureData = useSelector(state => state.AdminAppReducer.futureSale);
  console.log('revenue===>', salesData,futureData);

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: graphData,
      },
    ],
  };

  // useEffect(() => {
  //   if (salesData) {
  //     handleGraphData(salesData);
  //   }
  // }, [salesData]);
  // console.log('graphData===>', graphData);

  console.log('HOME COMPONENT IS RERENDERING');

  const handleGraphData = salesData => {
    console.log('salesData in function==>', salesData);
    // if (salesData.length > 0) {
    const graphValue = salesData.map(item => item.total_amount);
    setGraphData(graphValue);

    // }
  };

  const purchaseData = [
    {id: 1, vendor: 'PSO', bought: '17,000 ltr'},
    {id: 2, vendor: 'Shell', bought: '17,000 ltr'},
    {id: 3, vendor: 'Suparco', bought: '1.5 ltr'},
  ];

  const handleInsightPress = () => {
    NavigationService.navigate(AdminAppStack.InsighScreen.name, {
      data: salesData,
      futureData : futureData
    });
  };

  useEffect(() => {
    const payload = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(AdminAppAction.GetRevenue(payload));
  }, []);

  useEffect(() => {
    const payload = {
      action: '',
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetSales(payload));
    dispatch(AdminAppAction.FutureSale(payload));
  }, []);

  useEffect(() => {
    const payload = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(AdminAppAction.FutureSale(payload));
  }, []);


  


  const UsersItem = ({item}) => {
    return (
      <View style={styles.purchaseContainer}>
        <View style={styles.column}>
          <Text style={styles.dataText}>{item?.vendor}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.dataText}>{item?.bought}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={GlobalStyle.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScreenNameHeader title={'Dashboard'} />

        <View
          style={{
            paddingHorizontal: moderateScale(20),
            marginTop: verticalScale(20),
          }}>
          <BalanceCard revenue={revenue} />

          {/* <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}> */}
          <LinearGradient
            style={[styles.inventoryContainer,{marginTop:verticalScale(50)}]}
            colors={['#f83600', '#fe8c00']}>
            <Pressable
              onPress={handleInsightPress}
              style={styles.inventoryTitle}>
              <Text style={styles.headingText}>View Insights</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient colors={['#0a398a', '#001f4d']} style={[styles.inventoryContainer,{marginTop:verticalScale(30)}]}>
            <Pressable
              onPress={() =>
                NavigationService.navigate(AdminAppStack.Inventory.name)
              }
              style={styles.inventoryTitle}>
              <Text style={styles.headingText}>View Current Inventory</Text>
            </Pressable>
          </LinearGradient>
          {/* </View> */}

          {/* <View style={styles.purchasesMainView}>
            <View style={styles.purchasesTitle}>
              <Text style={styles.headingText}>Recent Purchases</Text>
            </View>
            <View style={styles.purchaseContainer}>
              <View style={styles.column}>
                <Text style={styles.headerText}>Vendor</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.headerText}>Bought</Text>
              </View>
            </View>

            <FlatList
              data={purchaseData}
              renderItem={({item}) => <UsersItem item={item} />}
            />

            <Pressable
              style={{alignItems: 'flex-end', padding: moderateScale(10)}}>
              <View style={GlobalStyle.row}>
                <Text style={styles.viewAll}>View All</Text>
                <Icons.MaterialIcons
                  name="keyboard-arrow-right"
                  size={scale(16)}
                  style={{bottom: 1}}
                  color={Colors.Primary}
                />
              </View>
            </Pressable>
          </View> */}
          {loading && <Loader isModalLoader />}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  inventoryContainer: {
    justifyContent: 'center',
    backgroundColor: '#0a398a',
    borderRadius: scale(10),
    overflow: 'hidden',
    marginTop: verticalScale(40),
    // width: '45%',
    height: verticalScale(100),
  },
  inventoryTitle: {
    // backgroundColor: Colors.Primary,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  headingText: {
    fontFamily: Fonts.Poppins700,
    fontSize: scale(18),
    color: Colors.White,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

  purchasesMainView: {
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    overflow: 'hidden',
    marginVertical: verticalScale(40),
  },
  purchasesTitle: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
  },

  purchaseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(5),
  },
  column: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  headerText: {
    color: Colors.Black,
    textAlign: 'left',
    fontFamily: Fonts.Poppins700,
    fontSize: scale(13),
  },
  dataText: {
    color: Colors.Black,
    textAlign: 'left',
    fontFamily: Fonts.Poppins600,
    fontSize: scale(12),
  },
  viewAll: {
    color: Colors.Primary,
    fontFamily: Fonts.Poppins700,
    fontSize: scale(12),
  },
});
