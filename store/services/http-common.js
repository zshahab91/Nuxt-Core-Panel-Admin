import axios from 'axios'
import jwtDecode from 'jwt-decode'
import baseConfig from './config'


let token = null;
axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'}
axios.defaults.baseURL =  baseConfig.url

const client = (token = null) => {
  // jwtDecode(token)
  const defaultOptions = {
    headers: {
      Authorization: token ? `Token ${token}` : '',
    },
  };

  return {
    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  };
};


export const HTTP = client(token);


// request.get(PAGES_URL);
