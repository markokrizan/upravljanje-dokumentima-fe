import { connect } from 'react-redux';
import { compose } from 'redux';


import ProtectedComponent from './ProtectedComponent';

const mapStateToProps = state => {
    return {
      isLoggedIn: state.authUser.isLoggedIn,
      loggedInUser: state.authUser.loggedInUser
    };
};
  
const withConnect = connect(
  mapStateToProps,
  null
)

export default compose(withConnect)(ProtectedComponent)