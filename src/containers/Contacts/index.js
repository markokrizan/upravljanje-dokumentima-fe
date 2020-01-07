import { connect } from 'react-redux';
import { compose } from 'redux';

import Contacts from './Contacts';

import { logOut, getMe  } from '../../store/actions/AuthActions';

const mapStateToProps = state => {
    return {
      isLoggedIn: state.authUser.isLoggedIn,
      loggedInUser: state.authUser.loggedInUser
    };
};
  
  const mapDispatchToProps = {
    logOut,
    getMe
  };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Contacts)
