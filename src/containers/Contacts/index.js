import { connect } from 'react-redux';
import { compose } from 'redux';

import Contacts from './Contacts';

import { 
  getMyContacts, 
  saveContact,
  deleteContact
} from '../../store/actions/ContactActions';

const mapStateToProps = state => {
    return {
      contacts: state.contact.myContacts
    };
};
  
const mapDispatchToProps = {
  getMyContacts,
  saveContact,
  deleteContact
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Contacts)
