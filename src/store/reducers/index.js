import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import accountReducer from './AccountReducer';
import contactReducer from './ContactReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    account: accountReducer,
    contact: contactReducer,
    router: connectRouter(history)
  });
