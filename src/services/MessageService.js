import ApiService from './ApiService';

const ENDPOINTS = {
  MESSAGES: (accountId, folderId) => `/api/accounts/${accountId}/folders/${folderId}/messages`
};

class MessageService extends ApiService {
  getMessages = ({ accountId, folderId, query, page, sort }) => {
    return this.apiClient.get(ENDPOINTS.MESSAGES(accountId, folderId), {
      params: {
        query,
        page,
        sort
      }
    });
  };
}

export const messageService = new MessageService();
