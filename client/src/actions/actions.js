import { FETCH_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST, LIKE_POST } from 'constants/actonType';
import * as api from 'api/api';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.getPost();
    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = newPost => async dispatch => {
  try {
    const { data } = await api.createNewPost(newPost);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, newPost) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, newPost);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
