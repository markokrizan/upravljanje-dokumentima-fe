import ApiService from './ApiService';

const ENDPOINTS = {
  ACCOUNT_MESSAGES: (accountId, folderId) => `/api/accounts/${accountId}/folders/${folderId}/messages`,
  MESSAGES: '/api/messages'
};

class MessageService extends ApiService {
  getMessages = ({ accountId, folderId, query, page, sort }) => {
    return this.apiClient.get(ENDPOINTS.ACCOUNT_MESSAGES(accountId, folderId), {
      params: {
        query,
        page,
        sort
      }
    });
  };

  saveMessage = payload => {
    return this.apiClient.post(ENDPOINTS.MESSAGES, payload);
  }
}

export const messageService = new MessageService();
