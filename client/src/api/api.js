import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

const POSTS = '/posts';
const USERS = '/users';

export const getPost = () => API.get('/posts');
export const createNewPost = newPost => API.post(`${POSTS}`, newPost);

export const deletePost = id => API.delete(`${POSTS}/${id}`);

export const updatePost = (id, newPost) => API.patch(`${POSTS}/${id}`, newPost);

export const likePost = id => API.patch(`${POSTS}/${id}/likePost`);

export const signUp = formData => API.post(`${USERS}/signup`, formData);

export const signIn = formData => API.post(`${USERS}/signin`, formData);
