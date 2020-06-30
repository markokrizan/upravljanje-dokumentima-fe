import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import accountReducer from './AccountReducer';
import contactReducer from './ContactReducer';
import folderReducer from './FolderReducer';
import messageReducer from './MessageReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    account: accountReducer,
    contact: contactReducer,
    folder: folderReducer,
    message: messageReducer,
    router: connectRouter(history)
  });
