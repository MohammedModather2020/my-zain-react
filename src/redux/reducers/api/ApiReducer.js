import { LOADED_ERROR, LOADED_SUCCESS, PRE_REQUEST } from '../../type';

const initState = {
  data: [],
  loading: false,
  error: '',
};
const ApiReducer = (state = initState, action) => {
  switch (action.type) {
    case PRE_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: '',
      };
    case LOADED_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case LOADED_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ApiReducer;
