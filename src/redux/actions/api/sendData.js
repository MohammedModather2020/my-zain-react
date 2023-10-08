import { toast } from 'react-toastify';
import ApiConfig from '../../../api/ApiConfig';
import {
  LOADED_ERROR,
  LOADED_SUCCESS,
  PRE_REQUEST,
  REMOVE_COOKIE,
} from '../../type';

export const sendData =
  (url, token, data, navigate, redirect) => async (dispatch) => {
    try {
      dispatch({
        type: PRE_REQUEST,
      });
      const res = await ApiConfig.post(`${url}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        if (res.data.status) {
          toast.success(res.data.message);
          dispatch({
            type: LOADED_SUCCESS,
            payload: [],
            error: '',
          });
          navigate(redirect);
        } else {
          dispatch({
            type: LOADED_ERROR,
            payload: [],
            error: res?.data?.message,
          });
        }
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        dispatch({ type: REMOVE_COOKIE });
      } else if (err?.response?.status === 400) {
        dispatch({
          type: LOADED_ERROR,
          payload: [],
          error: err?.response?.data,
        });
      } else {
        dispatch({
          type: LOADED_ERROR,
          payload: [],
          error: err?.response?.data,
        });
      }
    }
  };
