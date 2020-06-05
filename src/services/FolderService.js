import ApiService from './ApiService';

const ENDPOINTS = {
  FOLDERS: accountId => `/api/accounts/${accountId}/folders`,
  FOLDER: (accountId, folderId) => `/api/accounts/${accountId}/folders/${folderId}`
};

class FolderService extends ApiService {
  getFolders = ({ accountId }) => {
    return this.apiClient.get(ENDPOINTS.FOLDERS(accountId));
  };

  saveFolder = ({ data, account }) => {
    return this.apiClient.post(ENDPOINTS.FOLDERS(account.id), data);
  }

  deleteFolder = ({ accountId, folderId }) => {
    return this.apiClient.delete(ENDPOINTS.FOLDER(accountId, folderId));
  }
}

export const folderService = new FolderService();
