import { connect } from 'react-redux';
import { compose } from 'redux';

import Folder from './Folder';

import { syncFolder } from '../../store/actions/FolderActions';
import { getMessages, saveMessage } from '../../store/actions/MessageActions';

const mapStateToProps = state => {
    return {
      defaultAccount: state.account.defaultAccount,
      folders: state.folder.folders,
      messages: state.message.messages,
      isLoading: state.loader.isLoading
    };
};
  
const mapDispatchToProps = {
  syncFolder,
  getMessages,
  saveMessage
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Folder)
