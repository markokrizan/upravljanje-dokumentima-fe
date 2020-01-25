import { fork } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import AccountSaga from  './AccountSaga';

export default function* rootSaga() {
  yield fork(AuthSaga);
  yield fork(AccountSaga);
}
