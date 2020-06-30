import { connect } from 'react-redux';
import { compose } from 'redux';

import Folder from './Folder';

import { syncFolder } from '../../store/actions/FolderActions';
import { getMessages } from '../../store/actions/MessageActions';

const mapStateToProps = state => {
    return {
      defaultAccount: state.account.defaultAccount,
      folders: state.folder.folders,
      messages: state.message.messages
    };
};
  
const mapDispatchToProps = {
  syncFolder,
  getMessages
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Folder)
