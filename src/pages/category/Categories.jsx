import { Fragment, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { isArray } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { getData } from '../../redux/actions/api/getData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Table from '../../components/table/Table';

export default function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state?.auth);
  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'title AR',
        disableFilters: true,
        accessor: 'titleAr',
      },
      {
        Header: 'title En',
        disableFilters: true,
        accessor: 'titleEn',
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
                navigate(`/categories/${row.values.id}/update`, {
                  state: row.original,
                })
              }
            >
              <FiEdit />
            </button>
            <button
              className='btn btn-danger btn-icon mg-r-5 mg-b-10'
              // onClick={() => {
              //   setMsisdn(row.values.MSISDN);
              //   setShowModalConfirm(true);
              // }}
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
    dispatch(getData(`category/getAllCategories`, accessToken));
  }, [accessToken, dispatch]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(categories) && categories, [categories]);

  return (
    <Fragment>
      <Breadcrumb title='All categories' textActive='Categories' />
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
              total={categories?.total}
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
