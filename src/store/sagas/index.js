import { fork } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import AccountSaga from  './AccountSaga';
import ContactSaga from './ContactSaga';
import FolderSaga from './FolderSaga';
import MessageSaga from './MessageSaga';

export default function* rootSaga() {
  yield fork(AuthSaga);
  yield fork(AccountSaga);
  yield fork(ContactSaga);
  yield fork(FolderSaga);
  yield fork(MessageSaga);
}
