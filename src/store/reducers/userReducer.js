import {SET_SOCKET_STREAM, SET_TOKEN, SET_USER, SET_USERS} from '../types';

const initialState = {
  user: {},
  users: [],
  accessToken: null,
  role: '',
  socketStream: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        role: action.payload.role,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_SOCKET_STREAM:
      return {
        ...state,
        socketStream: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
