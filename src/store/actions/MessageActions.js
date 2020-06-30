import {
    GET_MESSAGES,
    SET_MESSAGES
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
