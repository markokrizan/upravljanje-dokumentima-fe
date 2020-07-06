import {
    GET_MESSAGES,
    SET_MESSAGES,
    SAVE_MESSAGE
} from './MessageActionTypes';

export const getMessages = payload => {
    return {
        type: GET_MESSAGES,
        payload
    }
}
  
export const setMessages = payload => {
    return {
        type: SET_MESSAGES,
        payload
    }
}

export const saveMessage = payload => {
    return {
        type: SAVE_MESSAGE,
        payload
    }
}
