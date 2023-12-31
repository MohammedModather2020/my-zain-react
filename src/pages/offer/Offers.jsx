import PropTypes from 'prop-types';
import moment from 'moment';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowUpRight, BsBoxArrowUpRight } from 'react-icons/bs';
import { getData } from '../../redux/actions/api/getData';
import { deleteData } from '../../redux/actions/api/deleteData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ModalConfirm from '../../components/helper/modal/ModalConfirm';
import Table from '../../components/table/Table';

export default function Offers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const { accessToken, roles } = useSelector((state) => state?.auth);
  const { data: offers, loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
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
        Header: 'Modified By',
        disableFilters: true,
        accessor: 'modifiedBy',
      },
      {
        Header: 'New Tariff',
        disableFilters: true,
        accessor: 'newTariff',
      },
      {
        Header: 'Offer Id',
        disableFilters: true,
        accessor: 'offerId',
      },
      {
        Header: 'Tag Id',
        disableFilters: true,
        accessor: 'tagId',
      },
      {
        Header: 'Segments',
        disableFilters: true,
        accessor: 'segmentIds',
        Cell: ({ row }) => (
          <button
            className='btn  btn-icon mg-r-5 mg-b-10'
            onClick={() =>
              navigate(`/offers/${row.values.id}/segments`, {
                state: { titleEn: row?.values?.titleEn },
              })
            }
          >
            <BsArrowUpRight />
          </button>
        ),
      },
      {
        Header: 'Active',
        disableFilters: true,
        accessor: 'active',
        Cell: ({ row }) =>
          row?.values?.active ? (
            <span className='btn btn-sm btn-label-success'>True</span>
          ) : (
            <span className='btn btn-sm btn-label-danger'>False</span>
          ),
      },
      {
        Header: 'Created At',
        disableFilters: true,
        accessor: 'createdAt',
        Cell: ({ row }) => (
          <time>{moment(row.values.createdAt).format('LLL')}</time>
        ),
      },
      {
        Header: 'Last Updated',
        disableFilters: true,
        accessor: 'lastUpdated',
        Cell: ({ row }) =>
          row.values.lastUpdated ? (
            <time>{moment(row.values.lastUpdated).format('LLL')}</time>
          ) : (
            '-------------'
          ),
      },
      {
        Header: 'Actions',
        accessor: 'id',
        disableFilters: true,
        Cell: ({ row }) => (
          <Fragment>
            {(roles?.includes('Admin') ||
              roles?.includes('ProductOffering')) && (
              <button
                className='btn btn-primary btn-icon mg-r-5 mg-b-10'
                onClick={() =>
                  navigate(`/offers/${row.values.id}/update`, {
                    state: row.original,
                  })
                }
              >
                <FiEdit />
              </button>
            )}
            {roles?.includes('Admin') && (
              <button
                className='btn btn-danger btn-icon mg-r-5 mg-b-10'
                onClick={() => {
                  setId(row.values.id);
                  setShowModalConfirm(true);
                }}
              >
                <AiFillDelete />
              </button>
            )}
            <button
              className='btn btn-info btn-icon mg-r-5 mg-b-10'
              onClick={() =>
                navigate(`/offers/${row.values.id}/details`, {
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
    [navigate, roles],
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    dispatch(getData(`offer/getAllOffers`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(offers) && offers, [offers]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `offer/deleteOffer`,
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
      <Breadcrumb title='All Offers' textActive='Offers' />
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className='card shadow mb-4'>
          {data && <Table columns={columns} data={data} />}
        </div>
      )}
    </Fragment>
  );
}

Offers.propTypes = {
  row: PropTypes.object,
};
