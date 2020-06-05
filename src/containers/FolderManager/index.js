import { connect } from 'react-redux';
import { compose } from 'redux';

import FolderManager from './FolderManager';

import { getFolders, saveFolder, deleteFolder  } from '../../store/actions/FolderActions';

const mapStateToProps = state => {
    return {
        folders: state.folder.folders,
        loggedInUser: state.authUser.loggedInUser,
        defaultAccount: state.account.defaultAccount
    };
};
  
const mapDispatchToProps = {
    getFolders,
    saveFolder,
    deleteFolder
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(FolderManager);
