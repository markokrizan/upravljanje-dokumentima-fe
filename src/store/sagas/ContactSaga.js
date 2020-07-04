import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_MY_CONTACTS,
  SAVE_CONTACT,
  DELETE_CONTACT
} from '../actions/ContactActionTypes';
import { 
  setMyContacts,
  setSavedContact,
  setDeletedContact
} from '../actions/ContactActions';
import { contactService } from '../../services/ContactService';
import { VALIDATION_FAILED } from '../../util/httpStatusCodes';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';


export function* myContactsGet({ payload }) {
  try {
    const { data } = yield call(contactService.getMyContacts, payload);
    yield put(setMyContacts(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contactSave({ payload, meta: {setErrors} }) {
  try {
    yield call(contactService.saveContact, payload);

    //Pull contacts again to compensate for paging - not optimized but less trouble
    const { data } = yield call(contactService.getMyContacts, payload);
    yield put(setMyContacts(data));
  } catch (error) {
    if (error.response.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.response.data.errors));
      return;
    }
    console.error(error);
  }
}

export function* contactDelete({ payload }) {
  try {
    yield call(contactService.deleteContact, payload);
    yield put(setDeletedContact(payload));
  } catch (error) {
    console.error(error);
  }
}

export default function* AccountSaga() {
  yield takeLatest(GET_MY_CONTACTS, myContactsGet);
  yield takeLatest(SAVE_CONTACT, contactSave);
  yield takeLatest(DELETE_CONTACT, contactDelete);
}
 