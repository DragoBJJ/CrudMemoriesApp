import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { authReducer } from './auth';

const reducers = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default reducers;
