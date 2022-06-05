import {$authHost, $host} from '../../http';
import {SET_SOCKET_STREAM, SET_TOKEN, SET_USER} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';

export const authUser = props => async dispatch => {
  try {
    const data = await $host.post('auth/signin', props);
    const user = data.data.user;
    const token = data.data.access_token;
    dispatch(setTokenAndUser(token, user));

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('userData', JSON.stringify(user));

    return user;
  } catch (e) {
    throw e.response.data;
  }
};

export const getUser = () => async dispatch => {
  try {
    const data = await $authHost('/user/me');

    dispatch({
      type: SET_USER,
      payload: data.data,
    });

    return data.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const setTokenAndUser = (token, user) => async dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  });

  dispatch({
    type: SET_USER,
    payload: user,
  });

  const socket = io('ws://mail.ext-it.ru:4480', {transports: ['websocket']});

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('connect_error', err => {
    console.log(err.message);
  });

  dispatch({
    type: SET_SOCKET_STREAM,
    payload: socket,
  });
};

export const logoutUser = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('userData');

  dispatch({
    type: SET_TOKEN,
    payload: null,
  });

  dispatch({
    type: SET_USER,
    payload: {},
  });
};
