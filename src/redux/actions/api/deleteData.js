import { toast } from 'react-toastify';
import {
  DELETE_DATA,
  LOADED_ERROR,
  PRE_REQUEST,
  REMOVE_COOKIE,
} from '../../type';
import ApiConfig from '../../../api/ApiConfig';

export const deleteData =
  (url, token, setShowModalConfirm, setIsShowLoading, isShowLoading) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRE_REQUEST,
      });
      const res = await ApiConfig.delete(`${url}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        if (res.data.status) {
          toast.success(res.data.message);
          dispatch({
            type: DELETE_DATA,
          });
          setShowModalConfirm(false);
          setIsShowLoading(!isShowLoading);
        } else {
          dispatch({
            type: LOADED_ERROR,
            payload: res?.data?.message,
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
