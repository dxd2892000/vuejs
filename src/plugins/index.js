import axios from 'axios';
import Vue from 'vue'
import queryString from 'query-string';
// import router from '@/router';
// import { removeAuthenticated } from '@/utils/auth';
// import { createApp} from "vue";
import { token } from '@/utils/auth';

const options = {
  arrayFormat: 'bracket',
};

// set up default config for http requests
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  // paramsSerializer: params => queryString.stringify(params, options),
});

// add a request interceptor
http.interceptors.request.use(
  config => {
    config.headers.Authorization=token();
    return config;
  },
  error => {
    // localStorage.removeItem('token');
    // this.$router.push('/login');
    // return Promise.reject(error);
  },
);

// add a response interceptor
http.interceptors.response.use(
  response => {
    return response?.data;
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token'),   
      setTimeout(() => {
        router.push('/login');
      });
    }
    return Promise.reject(error);
  },
);
Vue.prototype.$http = http;

export default http; //import global in main.js
