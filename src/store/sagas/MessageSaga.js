import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_MESSAGES,
  SAVE_MESSAGE
} from '../actions/MessageActionTypes';
import { 
  setMessages, getMessages
} from '../actions/MessageActions';
import { messageService } from '../../services/MessageService';

export function* messagesGet({ payload }) {
  try {
    const { data } = yield call(messageService.getMessages, payload);
    yield put(setMessages(data));
  } catch (error) {
    console.error(error);
  }
}

export function* messageSave({ payload }) {
  try {
    yield call(messageService.saveMessage, payload);

    yield put(getMessages({
      folderId : payload.folder.id,
      accountId : payload.folder.account.id
    }));
  } catch (error) {
    console.error(error);
  }
}

export default function* MessageSaga() {
  yield takeLatest(GET_MESSAGES, messagesGet);
  yield takeLatest(SAVE_MESSAGE, messageSave);
}
