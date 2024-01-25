import {AuthAction} from '../actions';
import {NavigationService, ApiCaller, showToast} from '../../config';
import {put} from 'redux-saga/effects';
import {AuthRoutes} from '../../config/Constants';
import {baseUrl} from '../../config/variables';
import {
  AppStack,
  ManagerAppStack,
} from '../../config/navigationConfig/ManagerAppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AdminAppStack} from '../../config/navigationConfig/AdminAppStack';
import {AuthStack} from '../../config/navigationConfig/AuthStack';
// import { AppStack } from '../../config/navigationConfig/AppStack';

export default class AuthMiddleware {
  static *SignIn({payload}) {
    try {
      let response = yield ApiCaller.Post(AuthRoutes.LOGIN, payload);

      console.log('response', response?.data?.data);

      if (response?.status === 200) {
        yield put(AuthAction.SignInSuccess(response?.data));
        yield put(AuthAction.SetUser(response?.data?.data));
        console.log(
          'response?.data?.data?.user?.role_id',
          response?.data?.data?.user?.role_id,
        );
        if (response?.data?.data?.user?.role_id == 1) {
          console.log('fitrst')
          // NavigationService.replace(AdminAppStack.BottomStack.name);
          NavigationService.replace(ManagerAppStack.ManagerBottomTab.name);
        } else {
          console.log('second')
          NavigationService.replace(ManagerAppStack.ManagerBottomTab.name);
        }
      } else {
        yield put(AuthAction.SignInFailure());
        showToast('error', `${response?.data?.error?.message}`);
      }
    } catch (err) {
      console.log(err);
      yield put(AuthAction.SignInFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `${err?.data?.error?.message}`);
    }
  }

  static *SetUser({payload}) {
    try {
      AsyncStorage.setItem('user', JSON.stringify(payload));
    } catch (err) {}
  }

  static *SignUp({payload}) {
    console.log('hiiiiiii')
    const {replace, navigate} = NavigationService;
    try {
      let response = yield ApiCaller.Post(AuthRoutes.REGISTER, payload);
      console.log('Sign up response -->> ', response?.data);
      if (response?.status === 200) {
        yield put(AuthAction.SignUpSuccess(response?.data));
        navigate(AuthStack.CompleteProfile.name, {
          data: payload,
        });
      } else {
        console.log('Response error  -->>', response);
        yield put(AuthAction.SignUpFailure());

        showToast('error', response?.data?.error?.message);
      }
    } catch (err) {
      yield put(AuthAction.SignInFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `"Error here`);
    }
  }

  static *CompleteProfile({payload}) {
    console.log('hiiiiiii')
    const {replace, navigate} = NavigationService;
    try {
      let response = yield ApiCaller.Post(AuthRoutes.COMPLETE_PROFILE, payload);
      console.log('Complete Profile response -->> ', response?.data);
      if (response?.status === 200) {
        yield put(AuthAction.CompleteProfileSuccess(payload));
        navigate(AuthStack.Login.name);
      } else {
        console.log('Response error  -->>', response);
        yield put(AuthAction.CompleteProfileFailure());

        showToast('error', response?.data?.error?.message);
      }
    } catch (err) {
      yield put(AuthAction.CompleteProfileFailure());
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
      showToast('error', `"Error here`);
    }
  }

  static *Logout({plainTextToken}) {
    console.log('plainTextToken', plainTextToken);
    try {
      let response = yield ApiCaller.Post(
        AuthRoutes.LOGOUT,
        {plainTextToken},
        {
          plainTextToken,
        },
      );
      console.log('response', response);
      AsyncStorage.removeItem('user');
      if (response?.status === 200) {
        yield put(AuthAction.LogoutSuccess());
        AsyncStorage.removeItem('user');
        NavigationService.reset_0(AuthStack.Login.name);
      } else {
        yield put(AuthAction.LogoutFailure());
        showToast('error', response?.data?.error?.message);
      }
    } catch (err) {
      console.log(`%c${err.name}`, 'color: red', ' => ', err);
    }
  }
}
