import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import RentCard from '../../components/RentCard/RentCard';
import {useDispatch, useSelector} from 'react-redux';
import {ManagerAppAction} from '../../store/actions';
import Loader from '../../components/Loader';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import {Colors} from '../../config';

const Rents = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.user);
  const loading = useSelector(state => state.CommonReducer.loader);
  const rents = useSelector(state => state.ManagerAppReducer.rents);

  useEffect(() => {
    const payload = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(ManagerAppAction.Rent(payload));
  }, []);

  const handleCollect = (item) =>{
    const payload = {
      token: user?.access_token?.plainTextToken,
      id: item?.id
    };
    dispatch(ManagerAppAction.CollectRent(payload))
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <ScreenNameHeader backArrow={true} title={'Collect Rents'} />
      <View style={GlobalStyle.paddingFlex}>
        <FlatList
          data={rents}
          renderItem={({item}) => (
            <RentCard onPressCollect={()=>handleCollect(item)} item={item} />
          )}
        />
      </View>

      {loading && <Loader isModalLoader />}
    </SafeAreaView>
  );
};

export default Rents;

const styles = StyleSheet.create({});
