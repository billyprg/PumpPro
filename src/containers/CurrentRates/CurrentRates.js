import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import CustomInput from '../../components/Inputs/Input';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts, Metrix, showToast} from '../../config';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import {CommonAction} from '../../store/actions';
import InputController from '../../components/InputController';
import Loader from '../../components/Loader';

const CurrentRates = () => {
  const user = useSelector(state => state.AuthReducer.user);
  const currentRates = useSelector(state => state.CommonReducer.current_rates);
  const loading = useSelector(state => state.CommonReducer.loader);

  // console.log('currentRates===>', currentRates.purchase_price_per_liter);
  const defaultValues = {
    purchase_price_per_liter: currentRates?.purchase_price_per_liter ||  '',
    sale_price_per_liter: currentRates?.purchase_price_per_liter || '',
  };
  const {
    control,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    defaultValues: defaultValues,
  });
  useEffect(() => {

    const token = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetCurrentRates(token));
  }, []);

  const dispatch = useDispatch();

  const onSubmit = handleSubmit(values => {
    console.log('values==>', values);

    // if (values.purchase_price_per_liter === '') {
    //   showToast('error', `Please fill the fields`);
    //   return;
    // }
    const data = {
      name: 'Petrol',
      ...values,
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.SetCurrentRates(data));
  });

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScreenNameHeader backArrow={true} title={'Current Rates'} />
      <View style={[GlobalStyle.padding, styles.innerContainer]}>
        {/* <CustomInput
          boxStyle={styles.inputStyle}
          placeholder="Enter retail price"
          uppertrue
          restyleUpperText={styles.upperText}
          upperText={'Purchase Price'}
          fontSize={scale(16)}
          size={scale(24)}
          control={control}
          name="purchase_price_per_liter"
          // defaultValues={defaultValues}
        /> */}

        <InputController
          placeHolder="Enter Purchase Price"
          control={control}
          errors={errors}
          defaultValues={defaultValues}
          name={'purchase_price_per_liter'}
          containerStyle={styles.inputStyle}
        />

        <InputController
          placeHolder="Enter Sale Price"
          control={control}
          errors={errors}
          defaultValues={defaultValues}
          name={'sale_price_per_liter'}
          containerStyle={styles.inputStyle}
        />

        <CustomButton
          text={'Submit'}
          restyleContainer={{marginTop: verticalScale(40)}}
          onPress={onSubmit}
        />

        {loading && <Loader isModalLoader />}
      </View>
    </SafeAreaView>
  );
};

export default CurrentRates;

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 0,
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: Colors.Primary,
    marginVertical: Metrix.VerticalSize(50),
  },
  innerContainer: {
    flex: 1,
    marginTop: '15%',
  },
  upperText: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5),
    fontWeight: Fonts.Poppins800,
  },
});
