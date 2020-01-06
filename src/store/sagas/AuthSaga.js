import { call, put, takeLatest } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';
import { LOGIN, REGISTER, GET_ME, LOGOUT} from '../actions/AuthActionTypes';
import { authUser, loginError, registerError, setMe } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';
import {UNAUTHORIZED, VALIDATION_FAILED} from '../../util/httpStatusCodes';

export function* userLogin({ payload, meta: {setErrors} }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push('/'));
    yield put(go());
  } catch (error) {
    if (error.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
      return;
    }
    if(error.response.status === UNAUTHORIZED) {
      yield put(loginError('Wrong username or password'));
      return;
    }
    yield put(loginError('Something went wrong'));
  }
}

export function* userRegister({ payload, meta: {setErrors} }) {
  try {
    yield call(AuthService.signup, payload);
    yield put(push('/login'));
    yield put(go());
  } catch (error) {
    if (error.response.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.response.data.errors));
      return;
    }
    yield put(registerError('Something went wrong'));
  }
}

export function* meGet() {
  try {
    const user = yield call(AuthService.getMe);
    yield put(setMe(user));
  } catch (error) {
    //TODO handle with generic snackbar
  }
}

export function* userLogout() {
  try {
    yield call(AuthService.destroySession);
    yield put(authUser(false));
    yield put(push('/login'));
    yield put(go());
  } catch (error) {
   //TODO handle with generic snackbar
  }
}


export default function* AuthSaga() {
  yield takeLatest(LOGIN, userLogin);
  yield takeLatest(LOGOUT, userLogout);
  yield takeLatest(REGISTER, userRegister);
  yield takeLatest(GET_ME, meGet);
}