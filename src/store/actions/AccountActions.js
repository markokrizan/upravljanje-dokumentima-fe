import {
    GET_MY_ACCOUNTS,
    SET_MY_ACCOUNTS,
    SAVE_ACCOUNT,
    SET_SAVED_ACCOUNT,
    DELETE_ACCOUNT,
    SET_DELETED_ACCOUNT
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

export const saveAccount = (payload, setErrors) => {
    return {
        type: SAVE_ACCOUNT,
        payload,
        meta: {
            setErrors
        }
    }
}

export const setSavedAccount = payload => {
    return {
        type: SET_SAVED_ACCOUNT,
        payload
    }
}

export const deleteAccount = payload => {
    return {
        type: DELETE_ACCOUNT,
        payload
    }
}


export const setDeletedAccount = payload => {
    return {
        type: SET_DELETED_ACCOUNT,
        payload
    }
}
