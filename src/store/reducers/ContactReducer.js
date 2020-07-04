import { 
    SET_MY_CONTACTS,
    SET_SAVED_CONTACT,
    SET_DELETED_CONTACT
} from '../actions/ContactActionTypes';
  
import { saveStateList, removeFromStateList } from '../../util/helpers';
  
const initialState = {
    myContacts: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_CONTACTS:
            return { ...state, myContacts: action.payload};
        case SET_DELETED_CONTACT:
            return removeFromStateList(state, 'myContacts', action.payload);
        default:
            return state;
    }
};
  
export default contactReducer;
