import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_FOLDERS,
  SAVE_FOLDER,
  DELETE_FOLDER
} from '../actions/FolderActionsTypes';
import { 
  setFolders,
  setDeletedFolder
} from '../actions/FolderActions';
import { folderService } from '../../services/FolderService';
import { VALIDATION_FAILED } from '../../util/httpStatusCodes';
import parseApiErrorsToFormik from '../../util/parseApiErrorsToFormik';

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

export default function* FolderSaga() {
  yield takeLatest(GET_FOLDERS, foldersGet);
  yield takeLatest(SAVE_FOLDER, folderSave);
  yield takeLatest(DELETE_FOLDER, folderDelete);
}
 