import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import InputController from '../../components/InputController';
import {useForm} from 'react-hook-form';
import {Colors, Metrix} from '../../config';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import {useDispatch, useSelector} from 'react-redux';
import {CommonAction} from '../../store/actions';
import {Picker} from '@react-native-picker/picker';
import SalesTable from '../../components/SaleTable/SalesTable';

const Sales = () => {
  const user = useSelector(state => state.AuthReducer.user);
  const salesData = useSelector(state => state.CommonReducer.sales);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('daily');

  console.log('salesData===>', salesData);

  useEffect(() => {
    const payload = {
      action: filter,
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetSales(payload));
  }, [filter]);

  const defaultValues = {
    filter: 'Filter',
  };
  
  const {
    control,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    shouldUnregister: false,
  });

  return (
    <SafeAreaView>
      <ScreenNameHeader title={'Sales'} backArrow={true} />
      <View style={[GlobalStyle.padding, styles.innerContainer]}>
        <View style={{width: '100%', alignSelf: 'flex-end', height: 100}}>
       
          <Picker
            selectedValue={filter}
            mode = {'dropdown'}
            style={{ color: 'black' }}
            onValueChange={value => setFilter(value)}>
            <Picker.Item  label="Daily" value="daily" />
            <Picker.Item label="Monthly" value="monthly" />
            <Picker.Item label="Yearly" value="yearly" />
          </Picker>
        </View>

        <SalesTable item={salesData} />
      </View>
    </SafeAreaView>
  );
};

export default Sales;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: '5%',
  },
});
