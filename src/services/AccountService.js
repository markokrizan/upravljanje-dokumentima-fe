import ApiService from './ApiService';

const ENDPOINTS = {
  MY_ACCOUNTS: '/api/accounts'
};

class AccountService extends ApiService {
  getMyAccounts = () => {
    return this.apiClient.get(ENDPOINTS.MY_ACCOUNTS);
  };
}

export const accountService = new AccountService();
