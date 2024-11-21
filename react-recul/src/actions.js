export const APP_SYNC = '@@app/APP_SYNC';
export const APP_CREATE_REQUEST = '@@app/APP_CREATE_REQUEST';
export const APP_CREATE_SUCCESS = '@@app/APP_CREATE_SUCCESS';
export const APP_CREATE_FAILURE = '@@app/APP_CREATE_FAILURE';
export const APP_READ_REQUEST = '@@app/APP_READ_REQUEST';
export const APP_READ_SUCCESS = '@@app/APP_READ_SUCCESS';
export const APP_READ_FAILURE = '@@app/APP_READ_FAILURE';
export const APP_UPDATE_REQUEST = '@@app/APP_UPDATE_REQUEST';
export const APP_UPDATE_SUCCESS = '@@app/APP_UPDATE_SUCCESS';
export const APP_UPDATE_FAILURE = '@@app/APP_UPDATE_FAILURE';
export const APP_REMOVE_REQUEST = '@@app/APP_REMOVE_REQUEST';
export const APP_REMOVE_SUCCESS = '@@app/APP_REMOVE_SUCCESS';
export const APP_REMOVE_FAILURE = '@@app/APP_REMOVE_FAILURE';

// Async action's data
// data: {
//   path: string,
//   ...other data
// }

export const actionSync = (data = {}, options = {}) => {
  return {
    type: APP_SYNC,
    payload: { ...data }
  };
};

export const actionCreate = (propName = 'demo', data = {}, options = {}) => {
  return {
    type: APP_CREATE_REQUEST,
    payload: { propName, path: '', ...data }
  };
};

export const actionRead = (propName = 'demo', data = {}, options = {}) => {
  return {
    type: APP_READ_REQUEST,
    payload: { propName, path: '', ...data }
  };
};

export const actionUpdate = (propName = 'demo', data = {}, options = {}) => {
  return {
    type: APP_UPDATE_REQUEST,
    payload: { propName, path: '', ...data }
  };
};

export const actionRemove = (propName = 'demo', data = {}, options = {}) => {
  return {
    type: APP_REMOVE_REQUEST,
    payload: { propName, path: '', ...data }
  };
};
