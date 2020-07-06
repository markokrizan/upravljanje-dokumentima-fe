import config from '../config';
import { isEmpty, sortBy } from 'lodash';

export const saveStateList = (state, stateKey, newEntity) => {
    let changed = 0;
  
    const updatedState = { ...state, [stateKey]: state[stateKey].map((item => {
      const itemId = item.id || item.model.id;

      if (itemId == newEntity.id){
        changed++;
        return newEntity;
      }
  
      return item;
    }))};

    if(!changed){
      return {...state, [stateKey]: [...state[stateKey], newEntity]};
    }
  
    return updatedState;
}

export const removeFromStateList = (state, stateKey, entityId) => {
    return {...state, [stateKey] : state[stateKey].filter((item) => {
      return item.id != entityId;
    })}
}

export const getDefaultUserAccount = accounts => {
  if(!accounts) {
    return null;
  }

  return accounts.filter(account => account.isActive)[0];
}

export const getLastContactPhoto = contact => {
  if(!contact || !contact.photos || !contact.photos.length) {
    return null;
  }

  const sortedPhotos = sortBy(contact.photos, ['id'], ['desc']);

  return `${config.API_BASE_URL}/${sortedPhotos[sortedPhotos.length - 1].path}`;
}

export const getAllContactPhotos = contact => {
  if(!contact || !contact.photos || !contact.photos.length) {
    return null;
  }

  return contact.photos.map(photo => `${config.API_BASE_URL}/${photo.path}`);
}

export const findFolderByName = (folders, name) => {
  return folders.filter(folder => folder.name === name)[0];
}

export const parseApiError = error => {
  if (!error || !error.response || !error.response.data) {
    return null;
  }

  return error.response.data;
}

export const parseSearchResultField = (searchResult, fieldName) => {
  if(isEmpty(searchResult)) {
    return null;
  }

  //Is direct model not search result object
  if(!isEmpty(searchResult) && !searchResult.highlightedFields) {
    return searchResult[fieldName];
  }

  if(!isEmpty(searchResult.highlightedFields) && searchResult.highlightedFields[fieldName]) {
    return searchResult.highlightedFields[fieldName];
  }

  return searchResult.model[fieldName];
}

export const capitalize = (str) => {
    return str && str[0].toUpperCase() + str.slice(1);
}

export const parseSort = sortItem => `${sortItem.fieldName},${sortItem.fieldDirection}`;
