import {SET_TOKEN, SET_USER, SET_USERS} from '../types';

const initialState = {
  user: {},
  users: [],
  accessToken: '',
  role: '',
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
    default:
      return state;
  }
};

export default userReducer;
