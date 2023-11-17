import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BalanceCard from '../../components/Cards/BalanceCard/BalanceCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../config';
import InventoryCard from '../../components/Cards/InventoryCard/InventoryCard';

const Home = () => {
  const inventoryData = [
    {id: 1, type: 'Petrol', quantity: '17,000 ltr'},
    {id: 2, type: 'Diesel', quantity: '17,000 ltr'},
    {id: 3, type: 'CNG', quantity: '1.5 ltr'},
  ];

  // const purchaseData = [
  //   {id: 1, vendor: 'PSO', bought: '17,000 ltr'},
  //   {id: 2, venor: 'Shell', bought: '17,000 ltr'},
  //   {id: 3, venor: 'Suparco', bought: '1.5 ltr'},
  // ];

  const usersItem = ({item, index}) => {
    return (
      <View style={styles.purchaseContainer}>
        <View>
          <Text style={{color:'black',textAlign:'left'}}>Vendor</Text>

          <Text style={{color:'black',textAlign:'left'}}>{item?.vendor}</Text>
        </View>

        <View>
        <Text style={{color:'black',textAlign:'left'}}>Bought</Text>

          <Text style={{color:'black',textAlign:'left'}}>{item?.bought}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: Colors.Primary}}>
        <Text
          style={{
            color: Colors.White,
            fontFamily: Fonts.Poppins600,
            fontSize: scale(30),
            alignSelf: 'center',
          }}>
          Welcome
        </Text>
      </View>

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

          <View style={{alignItems: 'center'}}>
            <FlatList
              showsHorizontalScrollIndicator
              style={{padding: moderateScale(10)}}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    marginHorizontal: 10,
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

        <View style={styles.inventoryContainer}>
          <View style={styles.inventoryTitle}>
            <Text style={styles.headingText}>Purchases</Text>
          </View>

        
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F6FF',
    flex: 1,
  },
  inventoryContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: scale(20),
    overflow: 'hidden',
    marginVertical: verticalScale(40),
  },
  inventoryTitle: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    padding: scale(10),
  },
  headingText: {
    fontFamily: Fonts.Poppins600,
    fontSize: scale(18),
    color: Colors.White,
    top: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

  purchaseContainer: {
    flexDirection: 'row',
  },
  purchase: {
    fontFamily: Fonts.Poppins600,
    fontSize: scale(14),
    color: Colors.Black,
    textAlign: 'left',
  },
});
