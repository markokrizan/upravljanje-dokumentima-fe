import {
    GET_MY_CONTACTS,
    SET_MY_CONTACTS,
    SAVE_CONTACT,
    SET_SAVED_CONTACT
} from './ContactActionTypes';

export const getMyContacts = () => {
    return {
        type: GET_MY_CONTACTS,
    }
}
  
export const setMyContacts = payload => {
    return {
        type: SET_MY_CONTACTS,
        payload
    }
}

export const saveContact = (payload, setErrors) => {
    return {
        type: SAVE_CONTACT,
        payload,
        meta: {
            setErrors
        }
    }
}

export const setSavedContact = payload => {
    return {
        type: SET_SAVED_CONTACT,
        payload
    }
}
