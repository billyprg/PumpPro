import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import {Colors} from '../../config';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../components/Text/CustomText';
import CustomInput from '../../components/Inputs/Input';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';

const Expenses = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const [editButton, setEditButton] = useState(false);
  const [editable, setEditable] = useState(false);

  

  const user = useSelector(state => state.AuthReducer.user);

  

  useEffect(() => {
    if (user?.user?.role_id === 1) {
      setEditButton(true);
    } else {
      setEditButton(false);
    }
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScreenNameHeader title={'Expenses'} backArrow={true} />
      <View style={[GlobalStyle.padding,styles.container]}>
        {editButton ? (
          <TouchableOpacity onPress={()=>setEditable(true)} activeOpacity={0.8} style={styles.edit}>
            <CustomText.LightText text={'Edit'} />
          </TouchableOpacity>
        ) : null}

        <View style={styles.expenseList}>
          <CustomInput
            boxStyle={{
              marginTop: verticalScale(5),
              borderWidth: 1,
              borderColor: Colors.Primary,
            }}
            placeholder="Employees Salary"
            upperText={'Total Employees Salary'}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            name="email"
            disabled={!editable}
          />
          <CustomInput
            boxStyle={{
              marginTop: verticalScale(5),
              borderWidth: 1,
              borderColor: Colors.Primary,
            }}
            restyleUpperText={styles.restyleUpperText}
            placeholder="Other"
            upperText={'Other Services like Maintenance'}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            name="other_services"
            disabled={!editable}
          />

          <CustomInput
            boxStyle={{
              marginTop: verticalScale(5),
              borderWidth: 1,
              borderColor: Colors.Primary,
            }}
            restyleUpperText={styles.restyleUpperText}
            placeholder="Vendors Cost"
            upperText={'Total Vendors cost'}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            name="ra"
            disabled={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  edit: {
    backgroundColor: Colors.Yellow,
    borderRadius: scale(8),
    paddingHorizontal: scale(25),
    alignSelf: 'flex-end',

  },
  container:{
    marginTop:verticalScale(30)
  }
});
