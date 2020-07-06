import axios from 'axios';
import config from '../config';
import store from '../store/Store';

import { setLoadingStatus } from '../store/actions/LoaderActions';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.request.use(this.handleInterceptRequest)
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.unauthorizedCallback = () => {};
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  }

  handleInterceptRequest(config) {
    store.dispatch(setLoadingStatus(true))

    return config;
  }

  handleSuccessResponse(response) {
    store.dispatch(setLoadingStatus(false))

    return response;
  }

  handleErrorResponse(error) {
    store.dispatch(setLoadingStatus(false))
    
    //TODO if needed

    //const { status } = error.response;

    // switch (status) {
    //   case 401: {
    //     this.unauthorizedCallback();
    //     break;
    //   }
    //   default:
    //     break;
    // }

    return Promise.reject(error);
  }

  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: config.API_BASE_URL
};
const httpService = new HttpService(options);

export default httpService;
