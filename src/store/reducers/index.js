import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import accountReducer from './AccountReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    account: accountReducer,
    router: connectRouter(history)
  });
