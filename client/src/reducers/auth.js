import { AUTH, LOGOUT } from 'constants/actonType';

export const authReducer = (state = { authData: null }, { type, payload }) => {
  switch (type) {
    case AUTH:
      console.log(payload);
      localStorage.setItem('profile', JSON.stringify({ ...payload }));
      return { ...state, authData: payload };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return { ...state };
  }
};
