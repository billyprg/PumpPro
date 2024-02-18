
import {NavigationService, ApiCaller, showToast} from '../../../config';
import {put} from 'redux-saga/effects';
import {AuthRoutes} from '../../config/Constants';
import {baseUrl} from '../../config/variables';
import {AppStack} from '../../config/navigationConfig/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdminAppRoutes } from '../../../config/Constants';
import { AdminAppAction } from '../../actions';
// import { AppStack } from '../../config/navigationConfig/AppStack';

export default class AdminAppMiddleware {

  static *GetRevenue({payload}) {
    const {token} = payload;
    try {
      let response = yield ApiCaller.Get(AdminAppRoutes.GET_REVENUE, {
        Authorization: `Bearer ${token}`,
      });

      console.log('response', response?.data);

      if (response?.status === 200) {
        yield put(AdminAppAction.GetRevenueSuccess(response?.data));
      } else {
        yield put(AdminAppAction.GetRevenueFailure());
        showToast('error', `${response?.data?.error}`);
      }
    } catch (err) {
      console.log(err);
      yield put(AdminAppAction.GetRevenueFailure());
      console.log(`%c${err.name}`, "color: red", ' => ', err)
      showToast("error", `${err?.data?.error}`)
    }
  }


  static *SetUser({ payload }) {
    try {
        AsyncStorage.setItem("user", JSON.stringify(payload))
    }
    catch (err) {
    }
}
}
