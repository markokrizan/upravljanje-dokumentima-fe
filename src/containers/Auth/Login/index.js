import { connect } from 'react-redux';
import { compose } from 'redux';

import Login from './Login';

import { logIn } from '../../../store/actions/AuthActions';


const mapStateToProps = state => {
    return {
      loginError: state.error.loginError
    };
  };
  
const mapDispatchToProps = {
  logIn
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Login)