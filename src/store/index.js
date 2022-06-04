import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
