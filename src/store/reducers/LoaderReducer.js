import { 
    SET_LOADING_STATUS
} from '../actions/LoaderActionTypes';

const initialState = {
    isLoading: false
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_STATUS:
            return { isLoading: action.payload };
        default:
            return state;
    }
};

export default loaderReducer;
  