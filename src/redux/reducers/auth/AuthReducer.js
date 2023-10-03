import { LOGIN_SUCCESS, REMOVE_COOKIE } from '../../type';

const initState = {
  isLogin: false,
  accessToken: '',
  expiresOn: '',
  refreshTokenExpiration: '',
  roles: '',
  username: '',
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
        username: action.payload.username,
      };
    }
    case REMOVE_COOKIE:
      return {
        ...state,
        isLogin: false,
        accessToken: '',
        expiresOn: '',
        refreshTokenExpiration: '',
        roles: '',
        username: '',
      };
    default:
      return state;
  }
};
export default AuthReducer;
