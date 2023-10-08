import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import moment from 'moment';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { getData } from '../../redux/actions/api/getData';
import { deleteData } from '../../redux/actions/api/deleteData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ModalConfirm from '../../components/helper/modal/ModalConfirm';
import Table from '../../components/table/Table';

export default function Packages() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken } = useSelector((state) => state?.auth);
  const { data: packages, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Title AR',
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
        Cell: ({ row }) => (
          <time>{moment(row.values.lastUpdate).format('LLL')}</time>
        ),
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
                navigate(`/packages/${row.values.id}/update`, {
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
    [navigate],
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`package/getAllPackages`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(packages) && packages, [packages]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `package/deletePackage`,
              accessToken,
              setShowModalConfirm,
              setIsShowLoading,
              isShowLoading,
              id,
            ),
          )
        }
        showModalConfirmTry={setShowModalConfirm}
        toggleModal={showModalConfirm}
      />
      <Breadcrumb title='All packages' textActive='packages' />
      {loading ? (
        <Loading isLoading={loading} />
      ) : error ? (
        error
      ) : (
        <div className='card shadow mb-4'>
          {data && (
            <Table
              // activePage={activePage}
              // setActivePage={setActivePage}
              // limitPage={limitPage}
              total={packages?.total}
              // setLimitPage={setLimitPage}
              columns={columns}
              data={data ?? []}
            />
          )}
        </div>
      )}
    </Fragment>
  );
}