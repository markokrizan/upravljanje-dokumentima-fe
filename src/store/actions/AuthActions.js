import { LOGIN, LOGOUT, AUTH_USER, GET_ME, SET_ME, REGISTER, LOGIN_ERROR, REGISTER_ERROR } from './AuthActionTypes';

export const logIn = (loginData, setErrors) => {
  return {
    type: LOGIN,
    payload: loginData,
    meta: {
      setErrors
    } 
  };
};

export const getMe = () => {  
  return {
    type: GET_ME
  }
}

export const setMe = user => {
  return {
    type: SET_ME,
    payload: user
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const register = (registerData, setErrors) => {
  return {
    type: REGISTER,
    payload: registerData,
    meta: {
      setErrors
    }
  };
};

export const authUser = payload => {
  return {
    type: AUTH_USER,
    payload
  };
};

export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    payload
  };
};

export const registerError = payload => {
  return {
    type: REGISTER_ERROR,
    payload
  };
};
