import ApiService from './ApiService';

const ENDPOINTS = {
  CONTACTS: '/api/contacts',
  CONTACT: contactId => `/api/contacts/${contactId}`
};

class ContactService extends ApiService {
  getMyContacts = data => {
    return this.apiClient.get(ENDPOINTS.CONTACTS, {
      params: {
        query : data && data.query ? data.query : null,
        page : data && data.page ? data.page : null
      }
    });
  };

  saveContact = data => {
    let formData = new FormData();
    
    if (data.photo) {
      formData.append('photo', data.photo);
    }

    if(data.id){
      formData.append('id', data.id);
    }
    
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('displayName', data.displayName);
    formData.append('email', data.email);
    formData.append('note', data.note);
     
    return this.apiClient.post(ENDPOINTS.CONTACTS, formData);
  }

  deleteContact = data => this.apiClient.delete(ENDPOINTS.CONTACT(data));
}

export const contactService = new ContactService();
