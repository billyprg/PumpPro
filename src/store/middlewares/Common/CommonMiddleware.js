import {put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiCaller, showToast} from '../../../config';
import {AuthRoutes, CommonAppRoutes} from '../../../config/Constants';
import {CommonAction} from '../../actions';
// import { AppStack } from '../../config/navigationConfig/AppStack';

export default class CommonMiddleware {
  static *SetCurrentRates({payload}) {
    const {token} = payload;
    console.log('payload', payload);
    try {
      let response = yield ApiCaller.Post(
        CommonAppRoutes.SET_CURRENT_RATES,
        payload,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      console.log('response', response);

      if (response?.status === 200) {
        yield put(CommonAction.SetCurrentRatesSuccess(response?.data));
        showToast('success', `${response?.data?.data?.message}`);
      } else {
        yield put(CommonAction.SetCurrentRatesFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.SetCurrentRatesFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *GetCurrentRates({payload}) {
    const {token} = payload;
    console.log('token', token);
    try {
      let response = yield ApiCaller.Get(CommonAppRoutes.GET_CURRENT_RATES, {
        Authorization: `Bearer ${token}`,
      });

      console.log('response of current rates', response?.data);

      if (response?.status === 200) {
        yield put(CommonAction.GetCurrentRatesSuccess(response?.data));
      } else {
        yield put(CommonAction.GetCurrentRatesSuccess());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.GetCurrentRatesSuccess());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *GetSales({payload}) {
    const {token} = payload;
    const {action} = payload;
    console.log('token', token);
    try {
      let response;
      if (action === '') {
         response = yield ApiCaller.Get(`auth/sale/`, {
          Authorization: `Bearer ${token}`,
        });
      } else {
         response = yield ApiCaller.Get(`auth/sale/group/${action}`, {
          Authorization: `Bearer ${token}`,
        });
      }

      console.log('response', response);

      if (response?.status === 200) {
        if(action === '') {
          yield put(CommonAction.GetSalesSuccess(response?.data));
        }
        else{
          yield put(CommonAction.GetSalesSuccess(response?.data?.data));
        }
       
      } else {
        yield put(CommonAction.GetSalesFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.GetSalesFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *Expenses({payload, cb}) {
    const {token} = payload;
    console.log('token', token);
    try {
      let response = yield ApiCaller.Post(CommonAppRoutes.EXPENSES, payload, {
        Authorization: `Bearer ${token}`,
      });

      console.log('response for add expense', response);

      if (response?.status === 200) {
        yield put(CommonAction.ExpensesSuccess());
        showToast('error', `${response?.status.message}`);
        cb && cb();
      } else {
        yield put(CommonAction.ExpensesFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.ExpensesFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *GetExpenses({payload}) {
    const {token} = payload;
    console.log('token in get', token);
    try {
      let response = yield ApiCaller.Get(CommonAppRoutes.GET_EXPENSES, {
        Authorization: `Bearer ${token}`,
      });

      console.log('response for expense', response);

      if (response?.status === 200) {
        yield put(CommonAction.GetExpensesSuccess(response?.data));
      } else {
        yield put(CommonAction.GetExpensesFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.GetExpensesFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *DeleteExpenses({payload, cb}) {
    const {token} = payload;
    console.log('token', token);
    try {
      let response = yield ApiCaller.Post(`auth/expenses/delete/${id}`, {
        Authorization: `Bearer ${token}`,
      });

      console.log('response', response);

      if (response?.status === 200) {
        yield put(CommonAction.DeleteExpensesSuccess(response?.data));
      } else {
        yield put(CommonAction.DeleteExpensesFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(CommonAction.DeleteExpensesFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }
}
