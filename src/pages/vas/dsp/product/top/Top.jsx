import PropTypes from 'prop-types';
import { Fragment, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isArray } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowUpRight } from 'react-icons/bs';
import { getData } from '../../../../../redux/actions/api/getData';
import { Loading } from '../../../../../components/helper/loading/Loading';
import Breadcrumb from '../../../../../components/breadcrumb/Breadcrumb';
import Table from '../../../../../components/table/Table';

export default function VasDspTop() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state?.auth);
  const { data: products, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`vasdsp/getAllVasDspTop`, accessToken));
  }, [accessToken, dispatch]);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Code',
        disableFilters: true,
        accessor: 'code',
      },
      {
        Header: 'Name Ar',
        disableFilters: true,
        accessor: 'productNameAr',
      },
      {
        Header: 'Name En',
        disableFilters: true,
        accessor: 'productName',
      },
      {
        Header: 'Type',
        disableFilters: true,
        accessor: 'productType',
      },
      {
        Header: 'Price',
        disableFilters: true,
        accessor: 'productPrice',
      },
      {
        Header: 'Access Method',
        disableFilters: true,
        accessor: 'accessMethod',
        Cell: ({ row }) => {
          const withoutQuot = row?.original?.accessMethod?.replace(
            /&quot;/g,
            '',
          );
          const url = withoutQuot?.replace(/\[MSISDN\]/g, row?.original?.code);
          return (
            <a
              href={url}
              target='_blank'
              className='btn btn-icon mg-r-5 mg-b-10 d-inline-block text-center'
              rel='noreferrer'
            >
              <BsArrowUpRight />
            </a>
          );
        },
      },
      {
        Header: 'Last Update',
        disableFilters: true,
        accessor: 'lastUpdate',
      },
    ],
    [],
  );
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(products) && products, [products]);
  return (
    <Fragment>
      <Breadcrumb
        title='All VAS DSP Top'
        textActive='Products'
        items={[{ name: 'VAS', url: '/vas-dsp/products/top' }]}
      />
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className='card shadow mb-4'>
          <Table columns={columns} data={data} limit={10} />
        </div>
      )}
    </Fragment>
  );
}
VasDspTop.propTypes = {
  row: PropTypes.object,
};
