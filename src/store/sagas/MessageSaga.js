import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  GET_MESSAGES
} from '../actions/MessageActionTypes';
import { 
  setMessages
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

export default function* MessageSaga() {
  yield takeLatest(GET_MESSAGES, messagesGet);
}
