import PropTypes from 'prop-types';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { getData } from '../../../../redux/actions/api/getData';
import { deleteData } from '../../../../redux/actions/api/deleteData';
import { Loading } from '../../../../components/helper/loading/Loading';
import ModalConfirm from '../../../../components/helper/modal/ModalConfirm';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import Table from '../../../../components/table/Table';

export default function VasCategories() {
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
  const columns = useMemo(
    () => [
      {
        Header: 'Name Ar',
        disableFilters: true,
        accessor: 'name_ar',
      },
      {
        Header: 'Name En',
        disableFilters: true,
        accessor: 'name',
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
                  navigate(`/categories/${row.values.id}/update`, {
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
    dispatch(getData(`vasdsp/getAllProductCategories`, accessToken));
  }, [accessToken, dispatch, isShowLoading]);
  // ----------------------------------------------------------------------------------->
  const data = useMemo(() => isArray(categories) && categories, [categories]);

  return (
    <Fragment>
      <ModalConfirm
        delete={() =>
          dispatch(
            deleteData(
              `vasdsp/deleteProductCategory`,
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
      <Breadcrumb title='All VAS categories' textActive='Categories' />
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

VasCategories.propTypes = {
  row: PropTypes.object,
};
