import { AUTH_USER, SET_ME } from '../actions/AuthActionTypes';
import AuthService from '../../services/AuthService';


const initialState = {
  //Switch this while testing:

  // isLoggedIn: AuthService.isAuthenticated(),
  // loggedInUser: null,

  isLoggedIn: true,
  loggedInUser: {name : 'Marko'}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.payload;
    case SET_ME:
      return  { ...state, loggedInUser: action.payload };
    default:
      return state;
  }
};

export default authReducer;
