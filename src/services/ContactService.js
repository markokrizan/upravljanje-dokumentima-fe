import ApiService from './ApiService';

const ENDPOINTS = {
  CONTACTS: '/api/contacts'
};

class ContactService extends ApiService {
  getMyContacts = () => {
    return this.apiClient.get(ENDPOINTS.CONTACTS);
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
}

export const contactService = new ContactService();
