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

export default function Segments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken } = useSelector((state) => state?.auth);
  const { data: segments, loading, error } = useSelector((state) => state.api);
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
        Header: 'Rate Plan',
        disableFilters: true,
        accessor: 'ratePlan',
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
                navigate(`/segments/${row.values.id}/update`, {
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
    dispatch(getData(`segment/getAllSegments`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(segments) && segments, [segments]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `segment/deletePackage`,
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
      <Breadcrumb title='All Segments' textActive='Segments' />
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
              total={segments?.total}
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
