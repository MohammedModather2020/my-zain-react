import { toast } from 'react-toastify';
import ApiConfig from '../../../api/ApiConfig';
import {
  LOADED_ERROR,
  LOADED_SUCCESS,
  PRE_REQUEST,
  REMOVE_COOKIE,
} from '../../type';

export const updateData =
  (url, token, data, navigate, redirect, type = false) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRE_REQUEST,
      });
      const res = await ApiConfig({
        data: data,
        method: type ? 'PUT' : 'PATCH',
        url: `${url}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        dispatch({
          type: LOADED_SUCCESS,
          payload: [],
        });
        navigate(redirect);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        dispatch({ type: REMOVE_COOKIE });
      } else if (err?.response?.status === 400) {
        dispatch({
          type: LOADED_ERROR,
          payload: err?.response?.data.message,
        });
      } else {
        dispatch({
          type: LOADED_ERROR,
          payload: err?.response?.data.message,
        });
      }
    }
  };
