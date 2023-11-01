import * as Yup from 'yup';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { sendData } from '../../redux/actions/api/sendData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function AddRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    name: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(`Name is required`)
      .min(3, `The name you should not be less than 3 characters`)
      .max(70, `The name you must not than 70 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    dispatch(
      sendData(
        `auth/addRole?name=${values?.name}`,
        accessToken,
        null,
        navigate,
        '/roles',
      ),
    );
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Fragment>
      <Loading isLoading={loading} />
      <Breadcrumb
        title='Add Roles'
        textActive='Add'
        items={[{ name: 'Roles', url: '/roles' }]}
      />
      <div className='row row-xs clearfix'>
        <div className='col-md-12 col-lg-12'>
          <div className='card mg-b-20 h-100'>
            <div className='card-header'>
              <h4 className='card-header-title'>
                Please fill all field required
              </h4>
              <div className='card-header-btn'>
                <a
                  href=''
                  data-toggle='collapse'
                  className='btn card-collapse'
                  data-target='#collapse1'
                  aria-expanded='true'
                >
                  <IoIosArrowDown />
                </a>
                <a href='' data-toggle='refresh' className='btn card-refresh'>
                  <IoIosRefresh />
                </a>
              </div>
            </div>
            <div className='card-body collapse show' id='collapse1'>
              <form
                className='form-layout form-layout-1'
                onSubmit={formik.handleSubmit}
              >
                <div className='row mg-b-25'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='name'
                        className='form-control-label active'
                      >
                        name <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='name'
                        {...formik.getFieldProps('name')}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className='tx-danger'>{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className='form-layout-footer text-center'>
                  <button className='btn btn-custom-primary mr-5' type='submit'>
                    <BsSend className='mr-2' /> Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
