import {AuthAction} from '../actions';
import {NavigationService, ApiCaller, showToast} from '../../config';
import {put} from 'redux-saga/effects';
import {AuthRoutes} from '../../config/Constants';
import {baseUrl} from '../../config/variables';
import {AppStack} from '../../config/navigationConfig/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AppStack } from '../../config/navigationConfig/AppStack';

export default class AuthMiddleware {
  static *SignIn({payload}) {
    try {
      let response = yield ApiCaller.Post(AuthRoutes.LOGIN, payload);

      console.log('response', response?.data?.data);

      if (response?.status === 200) {
        yield put(AuthAction.SignInSuccess(response?.data));
        yield put(AuthAction.SetUser(response?.data?.data));
        NavigationService.replace(AppStack.HomeStack.name);
      } else {
        yield put(AuthAction.SignInFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(AuthAction.SignInFailure());
      console.log(`%c${err.name}`, "color: red", ' => ', err)
      showToast("error", `${err?.data?.error?.message}`)
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
