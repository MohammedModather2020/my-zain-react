import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import moment from 'moment';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { getData } from '../../redux/actions/api/getData';
import { deleteData } from '../../redux/actions/api/deleteData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ModalConfirm from '../../components/helper/modal/ModalConfirm';
import Table from '../../components/table/Table';

export default function Promotions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken, roles } = useSelector((state) => state?.auth);
  const {
    data: promotions,
    loading,
    error,
  } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        disableFilters: true,
        Cell: ({ row }) =>
          row.values?.avatar ? (
            <img
              width='40'
              height='40'
              className='rounded-circle border'
              src={`${row?.value?.image}`}
              id='user-avatar'
              alt={row?.original?.imageTitle}
            />
          ) : (
            <Avatar name={row?.original?.imageTitle} size='40' round={true} />
          ),
      },
      {
        Header: 'Name',
        disableFilters: true,
        accessor: 'name',
      },
      {
        Header: 'Title Ar',
        disableFilters: true,
        accessor: 'titleAr',
      },
      {
        Header: 'Title En',
        disableFilters: true,
        accessor: 'titleEn',
      },
      {
        Header: 'Last Update',
        disableFilters: true,
        accessor: 'lastUpdate',
        Cell: ({ row }) =>
          row.values.lastUpdate ? (
            <time>{moment(row.values.lastUpdate).format('LLL')}</time>
          ) : (
            '-------------'
          ),
      },
      {
        Header: 'Actions',
        accessor: 'id',
        disableFilters: true,
        Cell: ({ row }) =>
          roles?.includes('Admin') && (
            <Fragment>
              <button
                className='btn btn-primary btn-icon mg-r-5 mg-b-10'
                onClick={() =>
                  navigate(`/promotions/${row.values.id}/update`, {
                    state: row.original,
                  })
                }
              >
                <FiEdit />
              </button>
              <button
                className='btn btn-danger btn-icon mg-r-5 mg-b-10'
                onClick={() => {
                  setId(row.values.id);
                  setShowModalConfirm(true);
                }}
              >
                <AiFillDelete />
              </button>
            </Fragment>
          ),
      },
    ],
    [navigate, roles],
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`category/getAllPromotions`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(promotions) && promotions, [promotions]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `promotion/deletePromotion`,
              accessToken,
              setShowModalConfirm,
              setIsShowLoading,
              isShowLoading,
              { id },
            ),
          )
        }
        showModalConfirmTry={setShowModalConfirm}
        toggleModal={showModalConfirm}
      />
      <Breadcrumb title='All promotions' textActive='Promotions' />
      {loading ? (
        <Loading isLoading={loading} />
      ) : error ? (
        error
      ) : (
        <div className='card shadow mb-4'>
          <Table columns={columns} data={data} />
        </div>
      )}
    </Fragment>
  );
}

Promotions.propTypes = {
  row: PropTypes.object,
};
