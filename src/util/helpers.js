export const saveStateList = (state, stateKey, newEntity) => {
    let changed = 0;
  
    const updatedState = { ...state, [stateKey]: state[stateKey].map((item => {
      if (item.id == newEntity.id){
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
