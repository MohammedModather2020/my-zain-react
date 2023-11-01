import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Fragment, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { getData } from '../../redux/actions/api/getData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Table from '../../components/table/Table';

export default function Admins() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state?.auth);
  const { data: admins, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        disableFilters: true,
        accessor: 'firstName',
        Cell: ({ row }) => (
          <div className='d-flex'>
            <Avatar
              name={`${row.original?.firstName} ${row?.original?.lastName}`}
              alt={`${row.original?.firstName} ${row?.original?.lastName}`}
              round
              size='50'
            />
            <div className='mg-l-10'>
              <p className='lh-1 mg-0'>
                {row.original?.firstName} {row?.original?.lastName}
              </p>
              <small>{row?.original?.username}</small>
            </div>
          </div>
        ),
      },
      {
        Header: 'Email',
        disableFilters: true,
        accessor: 'email',
      },
      {
        Header: 'Phone',
        disableFilters: true,
        accessor: 'phoneNumber',
      },
      {
        Header: 'Roles',
        disableFilters: true,
        accessor: 'roles',
        Cell: ({ row }) =>
          row?.values?.roles?.map((role, index) => (
            <span key={index} className='badge badge-primary p-2 mr-2'>
              {role}
            </span>
          )),
      },
      {
        Header: 'Active',
        disableFilters: true,
        accessor: 'isActive',
        Cell: ({ row }) =>
          row?.values?.isActive ? (
            <span className='btn btn-sm btn-label-success'>True</span>
          ) : (
            <span className='btn btn-sm btn-label-danger'>False</span>
          ),
      },
    ],
    [],
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`auth/getAllUsers`, accessToken));
  }, [accessToken, dispatch]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(admins) && admins, [admins]);

  return (
    <Fragment>
      <Breadcrumb title='All admins' textActive='Admins' />
      {loading ? (
        <Loading isLoading={loading} />
      ) : error ? (
        error
      ) : (
        <div className='card shadow mb-4'>
          {data && <Table columns={columns} data={data} />}
        </div>
      )}
    </Fragment>
  );
}
Admins.propTypes = {
  row: PropTypes.object,
};
