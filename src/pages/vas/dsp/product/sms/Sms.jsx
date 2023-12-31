import PropTypes from 'prop-types';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { isArray } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { getData } from '../../../../../redux/actions/api/getData';
import { deleteData } from '../../../../../redux/actions/api/deleteData';
import { Loading } from '../../../../../components/helper/loading/Loading';
import Table from '../../../../../components/table/Table';
import Breadcrumb from '../../../../../components/breadcrumb/Breadcrumb';
import ModalConfirm from '../../../../../components/helper/modal/ModalConfirm';

export default function VasDspSmsProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken, roles } = useSelector((state) => state?.auth);
  const { data: products, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`vasdsp/getAllVasDspProduct`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const columns = useMemo(
    () => [
      {
        Header: 'Product Code',
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
      {
        Header: 'Actions',
        accessor: 'id',
        disableFilters: true,
        Cell: ({ row }) =>
          (roles?.includes('Admin') || roles?.includes('VasBusiness')) && (
            <Fragment>
              <button
                className='btn btn-primary btn-icon mg-r-5 mg-b-10'
                onClick={() =>
                  navigate(`/vas-dsp/products/sms/${row.values.code}/update`, {
                    state: row.original,
                  })
                }
              >
                <FiEdit />
              </button>
              <button
                className='btn btn-danger btn-icon mg-r-5 mg-b-10'
                onClick={() => {
                  setId(row.values.code);
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
  const data = useMemo(
    () =>
      isArray(products) &&
      products.filter((product) => product?.productType === 'sms'),
    [products],
  );
  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `vasdsp/deleteTopProduct`,
              accessToken,
              setShowModalConfirm,
              setIsShowLoading,
              isShowLoading,
              { id, category: 'sms' },
            ),
          )
        }
        showModalConfirmTry={setShowModalConfirm}
        toggleModal={showModalConfirm}
      />
      <Breadcrumb
        title='All VAS DSP SMS'
        textActive='SMS'
        items={[{ name: 'VAS', url: '/vas-dsp/products/sms' }]}
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
VasDspSmsProducts.propTypes = {
  row: PropTypes.object,
};
