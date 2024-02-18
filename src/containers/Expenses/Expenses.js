import {
  FlatList,
  Pressable,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '../../constants/GlobalStyle';
import CustomText from '../../components/Text/CustomText';
import VendorCard from '../../components/Cards/VendorCard/VendorCard';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors, Icons, Metrix, NavigationService} from '../../config';
import {AppStack} from '../../config/navigationConfig/ManagerAppStack';
import BottomSheet from '../../components/RBSheet/RBSheet';
import CustomInput from '../../components/Inputs/Input';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/Buttons/CustomButton';
import ScreenNameHeader from '../../components/Headers/ScreenNameHeader/ScreenNameHeader';
import {useDispatch, useSelector} from 'react-redux';
import {CommonAction, ManagerAppAction} from '../../store/actions';
import ExpenseCard from '../../components/Cards/ExpenseCard/ExpenseCard';
import Loader from '../../components/Loader';

const Expenses = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.user);
  const expenses = useSelector(state => state.CommonReducer.expenses);
  const loading = useSelector(state => state.CommonReducer.loader);
  console.log('expenses', expenses);
  const data = [{id: 1, type: 'Salary', amount: '15000 Rs', date: '2024-1-28'}];

  const getExpenses = () => {
    console.log(
      'user?.access_token?.plainTextToken',
      user?.access_token?.plainTextToken,
    );
    const payload = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetExpenses(payload));
  };

  useEffect(() => {
    const payload = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetExpenses(payload));
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const onPressAdd = data => {
    console.log('data===>', data);
    const payload = {
      ...data,
      token: user?.access_token?.plainTextToken,
    };
    dispatch(
      CommonAction.Expenses(payload, () => {
        getExpenses();
        showAddExpenseSheet(false);
      }),
    );
  };

  const [addExpenseSheet, showAddExpenseSheet] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setEditButton(true);
  }, []);

  const AddExpenseBottomSheet = () => {
    return (
      <BottomSheet
        bottomSheetVisible={addExpenseSheet}
        onCloseReq={() => {
          showAddExpenseSheet(false);
        }}
        bottomSheetContainerStyle={{backgroundColor: Colors.Primary}}
        children={
          <View style={styles.container}>
            <View style={{bottom: 10, right: -10}}>
              <Icons.Entypo
                name="cross"
                size={Metrix.VerticalSize(25)}
                color={Colors.Primary}
                style={styles.crossIcon}
                onPress={() => showAddExpenseSheet(false)}
              />
            </View>
            <View style={{height: 15}} />
            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Expense Type"
              fontSize={scale(16)}
              control={control}
              name="type"
              maxLength={20}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Expense Amount"
              fontSize={scale(16)}
              control={control}
              name="amount"
              maxLength={6}
              keyboardType={'numeric'}
            />

            <CustomInput
              boxStyle={styles.inputStyle}
              placeholder="Expense Date"
              fontSize={scale(16)}
              control={control}
              name="date"
              maxLength={20}
            />

            <CustomButton
              restyleContainer={{
                marginVertical: Metrix.VerticalSize(40),
                backgroundColor: Colors.Yellow,
              }}
              text={'Add'}
              onPress={handleSubmit(onPressAdd)}
            />
          </View>
        }
      />
    );
  };

  const handleAddExpense = () => {
    showAddExpenseSheet(true);
  };

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScreenNameHeader title={'Expenses'} backArrow={true} />
      <View style={[GlobalStyle.padding]}>
        {/* {editButton ? (
          <TouchableOpacity onPress={()=>setEditable(true)} activeOpacity={0.8} style={styles.edit}>
            <CustomText.LightText text={'Edit'} />
          </TouchableOpacity>
        ) : null} */}

        <Pressable
          onPress={handleAddExpense}
          style={{
            backgroundColor: Colors.Primary,
            borderRadius: scale(10),
            paddingHorizontal: moderateScale(15),
            paddingVertical: verticalScale(5),
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: verticalScale(20),
          }}>
          <Icons.AntDesign
            name="plus"
            color={Colors.White}
            size={scale(18)}
            style={{marginHorizontal: verticalScale(2)}}
          />
          <CustomText.LightText
            text={'Add New Expense'}
            color="white"
            textAlign="left"
          />
        </Pressable>

        <FlatList
          data={expenses}
          contentContainerStyle={{paddingBottom: verticalScale(5)}}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: verticalScale(8),
              }}
            />
          )}
          renderItem={({item}) => <ExpenseCard item={item} />}
        />
      </View>
      <AddExpenseBottomSheet />
      {loading && <Loader isModalLoader />}
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
  container: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
  },
  inputStyle: {
    marginTop: 0,
    marginVertical: verticalScale(25),
    borderWidth: 1,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
  },
});
