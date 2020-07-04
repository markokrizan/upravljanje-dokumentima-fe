import ApiService from './ApiService';

const ENDPOINTS = {
  MESSAGES: (accountId, folderId) => `/api/accounts/${accountId}/folders/${folderId}/messages`
};

class MessageService extends ApiService {
  getMessages = ({ accountId, folderId, query, page }) => {
    return this.apiClient.get(ENDPOINTS.MESSAGES(accountId, folderId), {
      params: {
        query,
        page
      }
    });
  };
}

export const messageService = new MessageService();
