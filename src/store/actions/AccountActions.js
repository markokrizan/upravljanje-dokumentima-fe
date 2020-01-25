import {
    GET_MY_ACCOUNTS,
    SET_MY_ACCOUNTS
} from './AccountActionTypes';

export const getMyAccounts = () => {
    return {
        type: GET_MY_ACCOUNTS,
    }
}
  
export const setMyAccounts = payload => {
    return {
        type: SET_MY_ACCOUNTS,
        payload
    }
}