import PropTypes from 'prop-types';
import moment from 'moment';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../redux/actions/api/getData';

export default function VasDspTop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken, roles } = useSelector((state) => state?.auth);
  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.api);
    // ----------------------------------------------------------------------------------->
    useEffect(() => {
      dispatch(getData(`vasdsp/getAllVasDspTop`, accessToken));
    }, [accessToken, dispatch, isShowLoading]);

    console.log(categories)
  return (
    <div>
      
    </div>
  )
}
