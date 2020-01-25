import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MY_ACCOUNTS } from '../actions/AccountActionTypes';
import { setMyAccounts } from '../actions/AccountActions';
import { accountService } from '../../services/AccountService';


export function* myAccountsGet() {
  try {
    const { data } = yield call(accountService.getMyAccounts);
    yield put(setMyAccounts(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* AccountSaga() {
  yield takeLatest(GET_MY_ACCOUNTS, myAccountsGet);
}