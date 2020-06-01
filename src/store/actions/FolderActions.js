import {
    GET_FOLDERS,
    SET_FOLDERS,
    SAVE_FOLDER,
    SET_SAVED_FOLDER,
    DELETE_FOLDER,
    SET_DELETED_FOLDER
} from './FolderActionsTypes';

export const getFolders = payload => {
    return {
        type: GET_FOLDERS,
        payload
    }
}
  
export const setFolders = payload => {
    return {
        type: SET_FOLDERS,
        payload
    }
}

export const saveFolder = (payload, setErrors) => {
    return {
        type: SAVE_FOLDER,
        payload,
        meta: {
            setErrors
        }
    }
}

export const setSavedFolder = payload => {
    return {
        type: SET_SAVED_FOLDER,
        payload
    }
}

export const deleteFolder = payload => {
    return {
        type: DELETE_FOLDER,
        payload
    }
}

export const setDeletedFolder = payload => {
    return {
        type: SET_DELETED_FOLDER,
        payload
    }
}
