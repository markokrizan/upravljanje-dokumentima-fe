import { connect } from 'react-redux';
import { compose } from 'redux';

import Register from './Register';

import { register } from '../../../store/actions/AuthActions';

const mapStateToProps = state => {
    return {
      registerError: state.error.registerError
    };
  };
  
  const mapDispatchToProps = {
    register
  };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Register)