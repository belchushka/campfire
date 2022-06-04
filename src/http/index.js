import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const $authHost = axios.create({
  baseURL: 'http://mail.ext-it.ru:4080',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const $host = axios.create({
  baseURL: 'http://mail.ext-it.ru:4080',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

$authHost.interceptors.request.use(async config => {
  const token = (await AsyncStorage.getItem('token')) || '';
  config.headers.authorization = 'Bearer ' + token;
  return config;
});

$authHost.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    throw error;
  },
);

export {$authHost, $host};
