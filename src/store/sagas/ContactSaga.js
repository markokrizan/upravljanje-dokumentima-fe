import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_MY_CONTACTS,
  SAVE_CONTACT
} from '../actions/ContactActionTypes';
import { 
  setMyContacts,
  setSavedContact
} from '../actions/ContactActions';
import { contactService } from '../../services/ContactService';
import { VALIDATION_FAILED } from '../../util/httpStatusCodes';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';


export function* myContactsGet() {
  console.log('here');
  try {
    const { data } = yield call(contactService.getMyContacts);
    yield put(setMyContacts(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contactSave({payload, meta: {setErrors}}) {
  try {
    const { data } = yield call(contactService.saveContact, payload);
    yield put(setSavedContact(data));
  } catch (error) {
    if (error.response.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.response.data.errors));
      return;
    }
    console.error(error);
  }
}

export default function* AccountSaga() {
  yield takeLatest(GET_MY_CONTACTS, myContactsGet);
  yield takeLatest(SAVE_CONTACT, contactSave);
}
 