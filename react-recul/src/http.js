import axios from 'axios';
import * as CONFIG from './config';

const Http = {
  get: (url, data) => {
    return Request({ method: 'get', url, params: { ...data } });
  },

  post: (url, data) => {
    return Request({ method: 'post', url, data: { ...data } });
  },

  put: (url, data) => {
    return Request({ method: 'put', url, data: { ...data } });
  },

  delete: (url, data) => {
    return Request({ method: 'delete', url, data: { ...data } });
  }
};

const Request = request => {
  const config = {
    method: 'get',
    baseURL: CONFIG.API_URL,
    responseType: 'json',
    responseEncoding: 'utf8'
  };
  return axios({ ...config, ...request });
};

export default Http;
