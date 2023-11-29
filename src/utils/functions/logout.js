import { toast } from 'react-toastify';
import { REMOVE_COOKIE } from '../../redux/type';

export const logout = () => async (dispatch) => {
  dispatch({ type: REMOVE_COOKIE });
  toast.success('Signed out successfully');
};