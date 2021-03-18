import { FETCH_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST, LIKE_POST } from 'constants/actonType';
import Post from 'components/Posts/Post/Post';

export const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;

    case CREATE_POST:
      return [...state, payload];

    case DELETE_POST:
      return state.filter(post => post._id !== payload);

    case UPDATE_POST:
    case LIKE_POST:
      return state.map(post => (post._id === payload._id ? payload : post));

    default:
      return state;
  }
};
