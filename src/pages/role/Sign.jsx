import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { sendData } from '../../redux/actions/api/sendData';
import useData from '../../hooks/useData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function SignRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  const { data: roles } = useData(accessToken, 'auth/getAllRoles');
  const { data: users } = useData(accessToken, 'auth/getAllUsers');
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    role: '',
    userId: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    role: Yup.string().required(`role is required`),
    userId: Yup.string().required(`user is required`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      role: values?.role,
      userId: values?.userId,
    };
    dispatch(sendData(`auth/signRole`, accessToken, data, navigate, '/roles'));
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
        title='Sign Roles'
        textActive='Sign'
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
                        htmlFor='userId'
                        className='form-control-label active'
                      >
                        User <span className='tx-danger'>*</span>
                      </label>
                      <select
                        className='custom-select py-0'
                        defaultValue={users[0]}
                        value={formik.values.domainEvaluation}
                        {...formik.getFieldProps('userId')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {users &&
                          users?.map((user) => (
                            <option key={user?.id} value={user.name}>
                              {user.name}
                            </option>
                          ))}
                      </select>
                      {formik.touched.userId && formik.errors.userId ? (
                        <div className='tx-danger'>{formik.errors.userId}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='role'
                        className='form-control-label active'
                      >
                        Role <span className='tx-danger'>*</span>
                      </label>
                      <select
                        className='custom-select py-0'
                        defaultValue={roles[0]}
                        value={formik.values.domainEvaluation}
                        {...formik.getFieldProps('role')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {roles &&
                          roles?.map((role) => (
                            <option key={role?.id} value={role.name}>
                              {role.name}
                            </option>
                          ))}
                      </select>

                      {formik.touched.role && formik.errors.role ? (
                        <div className='tx-danger'>{formik.errors.role}</div>
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