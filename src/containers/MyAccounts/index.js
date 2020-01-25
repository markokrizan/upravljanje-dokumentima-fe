import { connect } from 'react-redux';
import { compose } from 'redux';

import MyAccounts from './MyAccounts';

import { getMyAccounts  } from '../../store/actions/AccountActions';

const mapStateToProps = state => {
    return {
      myAccounts: state.account.myAccounts
    };
};
  
const mapDispatchToProps = {
  getMyAccounts
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(MyAccounts)