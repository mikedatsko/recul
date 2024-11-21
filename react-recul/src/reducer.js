import {
  APP_SYNC,
  APP_CREATE_REQUEST,
  APP_CREATE_SUCCESS,
  APP_CREATE_FAILURE,
  APP_READ_REQUEST,
  APP_READ_SUCCESS,
  APP_READ_FAILURE,
  APP_UPDATE_REQUEST,
  APP_UPDATE_SUCCESS,
  APP_UPDATE_FAILURE,
  APP_REMOVE_REQUEST,
  APP_REMOVE_SUCCESS,
  APP_REMOVE_FAILURE
} from './Cora.actions';

const initialState = {
  auth: { isLoading: false, isLogged: false, error: '' },
  users: { isLoading: false, list: [], error: '' }
};

export default function (storeTree = {}) {
  return function AppReducer(
    state = { ...initialState, ...storeTree },
    action
  ) {
    switch (action.type) {
      case APP_SYNC:
        return {
          ...state,
          ...action.payload
        };

      // APP_CREATE
      case APP_CREATE_REQUEST:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: true,
            error: ''
          }
        };

      case APP_CREATE_SUCCESS:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            list: [...(action.payload.response.data.list || [])],
            error: ''
          }
        };

      case APP_CREATE_FAILURE:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            error: action.payload.error
          }
        };

      // APP_READ
      case APP_READ_REQUEST:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: true,
            error: ''
          }
        };

      case APP_READ_SUCCESS:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            list: [...(action.payload.response.data.list || [])],
            error: ''
          }
        };

      case APP_READ_FAILURE:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            error: action.payload.error
          }
        };

      // APP_UPDATE
      case APP_UPDATE_REQUEST:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: true,
            error: ''
          }
        };

      case APP_UPDATE_SUCCESS:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            list: [...(action.payload.response.data.list || [])],
            error: ''
          }
        };

      case APP_UPDATE_FAILURE:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            error: action.payload.error
          }
        };

      // APP_REMOVE
      case APP_REMOVE_REQUEST:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: true,
            error: ''
          }
        };

      case APP_REMOVE_SUCCESS:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            list: [...(action.payload.response.data.list || [])],
            error: ''
          }
        };

      case APP_REMOVE_FAILURE:
        return {
          ...state,
          [action.payload.propName]: {
            isLoading: false,
            error: action.payload.error
          }
        };

      default:
        return state;
    }
  };
}
