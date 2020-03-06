import { connect } from 'react-redux';
import { compose } from 'redux';

import MyAccounts from './MyAccounts';

import { 
  getMyAccounts, 
  saveAccount,
  deleteAccount
} from '../../store/actions/AccountActions';

const mapStateToProps = state => {
    return {
      myAccounts: state.account.myAccounts
    };
};
  
const mapDispatchToProps = {
  getMyAccounts,
  saveAccount,
  deleteAccount
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(MyAccounts)