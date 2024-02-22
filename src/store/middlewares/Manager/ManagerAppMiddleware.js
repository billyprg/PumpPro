import {put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonAppRoutes, ManagerAppRoutes} from '../../../config/Constants';
import {ManagerAppAction} from '../../actions';
import {ApiCaller, showToast} from '../../../config';
// import { AppStack } from '../../config/navigationConfig/AppStack';

export default class ManagerAppMiddleware {
  static *AddVendor({payload, cb}) {
    const {token} = payload;
    console.log('payload====>', payload);

    try {
      let response = yield ApiCaller.Post(
        ManagerAppRoutes.ADD_VENDOR,
        payload,
        {
          Authorization: `Bearer ${token}`,
        },
      );
      console.log('token====>', token);
      console.log('response====>', response);

      if (response?.status === 200) {
        yield put(ManagerAppAction.AddVendorSuccess());
        cb && cb();
      } else {
        yield put(ManagerAppAction.AddVendorFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.AddVendorFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *GetVendor({payload}) {
    const {token} = payload;
    console.log('token yeh hai=====>>', token);
    try {
      let response = yield ApiCaller.Get(ManagerAppRoutes.GET_VENDOR, {
        Authorization: `Bearer ${token}`,
      });
      console.log('token====>', token);
      console.log('response====>', response?.status);

      if (response?.status === 200) {
        console.log('response====+>', response);
        yield put(ManagerAppAction.GetVendorSuccess(response?.data));
      } else {
        yield put(ManagerAppAction.GetVendorFailure());
        showToast('error', `${response?.data?.error}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.GetVendorFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error}`);
    }
  }

  static *PostShiftStart({payload}) {
    const {token, action} = payload;
    console.log('payload====>', payload);
    console.log('token yeh hai=====>>', token);
    try {
      let response = yield ApiCaller.Post(`auth/shift/${action}`, payload, {
        Authorization: `Bearer ${token}`,
      });
      console.log('token====>', token);
      console.log('response====>', response);

      if (response?.status === 200) {
        console.log('response====+>', response);
        yield put(ManagerAppAction.PostShiftStartSuccess(response?.data));
        
      } else {
        yield put(ManagerAppAction.PostShiftStartFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.PostShiftStartFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *PostShiftEnd({payload}) {
    const {token, action} = payload;
    console.log('payload====>', payload);
    console.log('token yeh hai=====>>', token);
    try {
      let response = yield ApiCaller.Post(`auth/shift/${action}`, payload, {
        Authorization: `Bearer ${token}`,
      });
      console.log('token====>', token);
      console.log('response====>', response);

      if (response?.status === 200) {
        console.log('response====>', response);
        yield put(ManagerAppAction.Post(response?.data));
      } else {
        yield put(ManagerAppAction.PostShiftStartFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.PostShiftStartFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }


  static *GetRents({payload}) {
    const {token} = payload;
    console.log('payload====>', payload);
    console.log('token yeh hai=====>>', token);
    try {
      let response = yield ApiCaller.Get(ManagerAppRoutes.GET_RENT, {
        Authorization: `Bearer ${token}`,
      });
      console.log('token====>', token);
      console.log('response====>', response);

      if (response?.status === 200) {
        console.log('response====>', response);
        yield put(ManagerAppAction.RentSuccess(response?.data));
      } else {
        yield put(ManagerAppAction.RentSuccess());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.RentFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *CollectRents({payload}) {
    const {token,id} = payload;
    console.log('payload====>', payload);
    console.log('token yeh hai=====>>', token);
    try {
      let response = yield ApiCaller.Get(`auth/rental-aggrement/collect-rent/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log('response====>', response);

      if (response?.status === 200 || response?.status === 201) {
        console.log('response====>', response);
        yield put(ManagerAppAction.CollectRentSuccess(response?.data));
        showToast('error', `${response?.data?.message}`);
      } else {
        yield put(ManagerAppAction.CollectRentFailure());
        showToast('error', `${response?.data?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(ManagerAppAction.CollectRentFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${response?.data?.message}`);
    }
  }

  static *SetUser({payload}) {
    try {
      AsyncStorage.setItem('user', JSON.stringify(payload));
    } catch (err) {}
  }
}
