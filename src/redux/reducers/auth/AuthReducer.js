import { LOGIN_SUCCESS, REMOVE_COOKIE } from '../../type';

const initState = {
  isLogin: false,
  accessToken: '',
  expiresOn: '',
  refreshTokenExpiration: '',
  roles: [],
  firstName: '',
  lastName: '',
  username: '',
  email: '',
};
const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        accessToken: action.payload.accessToken,
        expiresOn: action.payload.expiresOn,
        refreshTokenExpiration: action.payload.refreshTokenExpiration,
        roles: action.payload.roles,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        email: action.payload.email,
      };
    }
    case REMOVE_COOKIE:
      return {
        ...state,
        isLogin: false,
        accessToken: '',
        expiresOn: '',
        refreshTokenExpiration: '',
        roles: [],
        firstName: '',
        lastName: '',
        username: '',
        email: '',
      };
    default:
      return state;
  }
};
export default AuthReducer;
