import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BalanceCard from '../../components/Cards/BalanceCard/BalanceCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../config';
import InventoryCard from '../../components/Cards/InventoryCard/InventoryCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from '../../config/icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {GlobalStyle} from '../../constants/GlobalStyle';

const Home = () => {
  const inventoryData = [
    {id: 1, type: 'Petrol', quantity: '17,000 ltr'},
    {id: 2, type: 'High-Octane', quantity: '17,000 ltr'},
    {id: 3, type: 'CNG', quantity: '1.5 ltr'},
  ];

  const purchaseData = [
    {id: 1, vendor: 'PSO', bought: '17,000 ltr'},
    {id: 2, vendor: 'Shell', bought: '17,000 ltr'},
    {id: 3, vendor: 'Suparco', bought: '1.5 ltr'},
  ];

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
      <Text
            style={{
              color: Colors.Black,
              fontFamily: Fonts.Poppins600,
              fontSize: scale(30),
              alignSelf: 'center',
            
            }}>
            Dashboard
          </Text>
        <View
          style={{
            paddingHorizontal: moderateScale(20),
            marginTop: verticalScale(20),
          }}>
         
          <BalanceCard />

          <View style={styles.inventoryContainer}>
            <View style={styles.inventoryTitle}>
              <Text style={styles.headingText}>Current Inventory</Text>
            </View>

            <View style={{alignItems: 'center', padding: moderateScale(10)}}>
              <FlatList
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      margin: 10,
                      backgroundColor: Colors.Primary,
                    }}
                  />
                )}
                horizontal
                data={inventoryData}
                renderItem={({item}) => <InventoryCard item={item} />}
              />
            </View>
          </View>

          <View style={styles.purchasesMainView}>
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
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inventoryContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: scale(10),
    overflow: 'hidden',
    marginVertical: verticalScale(40),
  },
  inventoryTitle: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
  },
  headingText: {
    fontFamily: Fonts.Poppins600,
    fontSize: scale(18),
    color: Colors.White,
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
