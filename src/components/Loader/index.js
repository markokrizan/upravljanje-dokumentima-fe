

import { connect } from 'react-redux';
import { compose } from 'redux';

import Loader from './Loader';

const mapStateToProps = state => {
    return {
        isLoading: state.loader.isLoading
    };
};
  
const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Loader)
