import { connect } from 'react-redux';
import { compose } from 'redux';

import Side from './Side';

import { getFolders, saveFolder  } from '../../store/actions/FolderActions';

const mapStateToProps = state => {
    return {
        folders: state.folder.folders,
        loggedInUser: state.authUser.loggedInUser,
        defaultAccount: state.account.defaultAccount
    };
};
  
const mapDispatchToProps = {
    getFolders,
    saveFolder
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Side);
