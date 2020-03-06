import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_MY_ACCOUNTS,
  SAVE_ACCOUNT,
  DELETE_ACCOUNT 
} from '../actions/AccountActionTypes';
import { 
  setMyAccounts, 
  setSavedAccount,
  setDeletedAccount
} from '../actions/AccountActions';
import { accountService } from '../../services/AccountService';
import { VALIDATION_FAILED } from '../../util/httpStatusCodes';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';


export function* myAccountsGet() {
  try {
    const { data } = yield call(accountService.getMyAccounts);
    yield put(setMyAccounts(data));
  } catch (error) {
    console.error(error);
  }
}

export function* accountSave({payload, meta: {setErrors}}) {
  try {
    const { data } = yield call(accountService.saveAccount, payload);
    yield put(setSavedAccount(data));
  } catch (error) {
    if (error.response.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.response.data.errors));
      return;
    }
    console.error(error);
  }
}

export function* accountDelete({payload}) {
  try {
    yield call(accountService.deleteAccount, payload);
    yield put(setDeletedAccount(payload));
  } catch (error) {
    console.error(error);
  }
}

export default function* AccountSaga() {
  yield takeLatest(GET_MY_ACCOUNTS, myAccountsGet);
  yield takeLatest(SAVE_ACCOUNT, accountSave);
  yield takeLatest(DELETE_ACCOUNT, accountDelete);
}