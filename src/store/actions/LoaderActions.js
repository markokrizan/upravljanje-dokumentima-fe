import { SET_LOADING_STATUS } from './LoaderActionTypes';

export const setLoadingStatus = payload => {
    return {
        type: SET_LOADING_STATUS,
        payload
    }
}
