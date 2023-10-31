import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { getData } from '../../redux/actions/api/getData';
import { deleteData } from '../../redux/actions/api/deleteData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ModalConfirm from '../../components/helper/modal/ModalConfirm';
import Table from '../../components/table/Table';

export default function Shops() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken } = useSelector((state) => state?.auth);
  const { data: shops, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Name Ar',
        disableFilters: true,
        accessor: 'shopNameAr',
      },
      {
        Header: 'Name En',
        disableFilters: true,
        accessor: 'shopNameEn',
      },
      {
        Header: 'City Ar',
        disableFilters: true,
        accessor: 'city',
      },
      {
        Header: 'City En',
        disableFilters: true,
        accessor: 'cityEn',
      },
      {
        Header: 'State Ar',
        disableFilters: true,
        accessor: 'state',
      },
      {
        Header: 'State En',
        disableFilters: true,
        accessor: 'stateEn',
      },
      {
        Header: 'Status',
        disableFilters: true,
        accessor: 'status',
        Cell: ({ row }) =>
          row?.values?.status ? (
            <span className='btn btn-sm btn-label-success'>ON</span>
          ) : (
            <span className='btn btn-sm btn-label-danger'>OFF</span>
          ),
      },
      {
        Header: 'Sattothu From',
        disableFilters: true,
        accessor: 'sattothuFrom',
      },
      {
        Header: 'Sattothu To',
        disableFilters: true,
        accessor: 'sattothuTo',
      },
      {
        Header: '',
        accessor: 'id',
        disableFilters: true,
        Cell: ({ row }) => (
          <Fragment>
            <button
              className='btn btn-primary btn-icon mg-r-5 mg-b-10'
              onClick={() =>
                navigate(`/shops/${row.values.id}/update`, {
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
            <button
              className='btn btn-info btn-icon mg-r-5 mg-b-10'
              onClick={() =>
                navigate(`/shops/${row.values.id}/details`, {
                  state: row.original,
                })
              }
            >
              <BsBoxArrowUpRight />
            </button>
          </Fragment>
        ),
      },
    ],
    [navigate],
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`shop/getAllShops`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(shops) && shops, [shops]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `shop/deleteShop`,
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
      <Breadcrumb title='All Shops' textActive='Shops' />
      {loading ? (
        <Loading isLoading={loading} />
      ) : error ? (
        error
      ) : (
        <div className='card shadow mb-4'>
          {data && <Table columns={columns} data={data ?? []} />}
        </div>
      )}
    </Fragment>
  );
}
