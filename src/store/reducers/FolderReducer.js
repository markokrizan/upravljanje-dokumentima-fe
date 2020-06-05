import { 
    SET_FOLDERS, 
    SET_SAVED_FOLDER,
    SET_DELETED_FOLDER
} from '../actions/FolderActionsTypes';

import { saveStateList, removeFromStateList } from '../../util/helpers';

const initialState = {
    folders: []
};

const folderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLDERS:
            return { ...state, folders: action.payload};
        case SET_SAVED_FOLDER:
            return saveStateList(state, 'folders', action.payload);
        case SET_DELETED_FOLDER:
            const { folderId } = action.payload;
            return removeFromStateList(state, 'folders', folderId);
        default:
            return state;
    }
};

export default folderReducer;
  