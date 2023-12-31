import { toast } from 'react-toastify';
import {
  LOADED_ERROR,
  LOADED_SUCCESS,
  PRE_REQUEST,
  REMOVE_COOKIE,
} from '../../type';
import ApiConfig from '../../../api/ApiConfig';

export const deleteData =
  (url, token, setShowModalConfirm, setIsShowLoading, isShowLoading, data) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRE_REQUEST,
      });
      const res = await ApiConfig.delete(`${url}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: data,
      });
      if (res.status === 200) {
        setShowModalConfirm(false);
        setIsShowLoading(!isShowLoading);
        if (res.data.status) {
          toast.success(res.data.message);
          dispatch({
            type: LOADED_SUCCESS,
            payload: [],
          });
        } else {
          dispatch({
            type: LOADED_ERROR,
            payload: res.data.message,
          });
        }
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        dispatch({ type: REMOVE_COOKIE });
      } else if (err?.response?.status === 400) {
        dispatch({
          type: LOADED_ERROR,
          payload: err?.response?.data,
        });
      } else {
        dispatch({
          type: LOADED_ERROR,
          payload: err?.response?.data,
        });
      }
    }
  };
