import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_FOLDERS,
  SAVE_FOLDER,
  DELETE_FOLDER,
  SYNC_FOLDER
} from '../actions/FolderActionsTypes';
import { 
  setFolders,
  setDeletedFolder
} from '../actions/FolderActions';
import { setMessages } from '../actions/MessageActions';
import { setLoadingStatus } from '../actions/LoaderActions';
import { folderService } from '../../services/FolderService';
import { VALIDATION_FAILED } from '../../util/httpStatusCodes';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';
import { BAD_REQUEST } from '../../util/httpStatusCodes';
import { parseApiError } from '../../util/helpers';

export function* foldersGet({ payload }) {
  try {
    const { data } = yield call(folderService.getFolders, payload);
    yield put(setFolders(data));
  } catch (error) {
    console.error(error);
  }
}

export function* folderSave({payload, meta: {setErrors}}) {
  try {
    const { data } = yield call(folderService.saveFolder, payload);
    yield put(setFolders(data));
  } catch (error) {
    if (error.response.status === VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.response.data.errors));
      return;
    }
    console.error(error);
  }
}

export function* folderDelete({ payload }) {
  try {
    const { data } = yield call(folderService.deleteFolder, payload);
    yield put(setFolders(data));
  } catch (error) {
    console.error(error);
  }
}

export function* folderSync({ payload }) {
  try {
    yield put(setLoadingStatus(true));

    const { data } = yield call(folderService.syncFolder, payload);
    yield put(setMessages(data));

    yield put(setLoadingStatus(false));
  } catch (error) {
    const errorData = parseApiError(error);
    if (errorData && errorData.status === BAD_REQUEST) {
      alert(errorData.message);
      console.error(errorData.message);
    }

    yield put(setLoadingStatus(false));
  }
}

export default function* FolderSaga() {
  yield takeLatest(GET_FOLDERS, foldersGet);
  yield takeLatest(SAVE_FOLDER, folderSave);
  yield takeLatest(DELETE_FOLDER, folderDelete);
  yield takeLatest(SYNC_FOLDER, folderSync);
}
 