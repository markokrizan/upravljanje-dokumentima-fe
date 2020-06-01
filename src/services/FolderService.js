import ApiService from './ApiService';

const ENDPOINTS = {
  FOLDERS: accountId => `/api/accounts/${accountId}/folders`,
};

class FolderService extends ApiService {
  getFolders = ({ accountId }) => {
    return this.apiClient.get(ENDPOINTS.FOLDERS(accountId));
  };

  saveFolder = ({ values, account }) => {
    return this.apiClient.post(ENDPOINTS.FOLDERS(account.id), values);
  }
}

export const folderService = new FolderService();
