import { 
  SET_MY_ACCOUNTS, 
  SET_SAVED_ACCOUNT,
  SET_DELETED_ACCOUNT
} from '../actions/AccountActionTypes';
import { saveStateList, removeFromStateList } from '../../util/helpers';

import { getDefaultUserAccount } from '../../util/helpers';

const initialState = {
  myAccounts: [],
  defaultAccount: null
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ACCOUNTS:
      return { ...state, myAccounts: action.payload, defaultAccount: getDefaultUserAccount(action.payload) };
    case SET_SAVED_ACCOUNT:
      return saveStateList(state, 'myAccounts', action.payload);
    case SET_DELETED_ACCOUNT:
      return removeFromStateList(state, 'myAccounts', action.payload);
    default:
      return state;
  }
};

export default accountReducer;
