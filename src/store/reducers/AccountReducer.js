import { SET_MY_ACCOUNTS } from '../actions/AccountActionTypes';


const initialState = {
  myAccounts: []
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_ACCOUNTS:
      return { ...state, myAccounts: action.payload};
    default:
      return state;
  }
};

export default accountReducer;
