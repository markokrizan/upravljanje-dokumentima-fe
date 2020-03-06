import ApiService from './ApiService';

const ENDPOINTS = {
  ACCOUNTS: '/api/accounts',
  ACCOUNT: id => `/api/accounts/${id}`
};

class AccountService extends ApiService {
  getMyAccounts = () => {
    return this.apiClient.get(ENDPOINTS.ACCOUNTS);
  };

  saveAccount = payload => {
    return this.apiClient.post(ENDPOINTS.ACCOUNTS, payload);
  }

  deleteAccount = payload => {
    return this.apiClient.delete(ENDPOINTS.ACCOUNT(payload));
  }
}

export const accountService = new AccountService();
