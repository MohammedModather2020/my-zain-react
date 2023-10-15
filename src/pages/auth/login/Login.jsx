import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { FaLock } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toggleShowingPassword } from '../../../utils/toggleShowingPassword';
import { LOGIN_SUCCESS } from '../../../redux/type';
import { Loading } from '../../../components/helper/loading/Loading';
import ApiConfig from '../../../api/ApiConfig';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    username: '',
    password: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    username: Yup.string()
      .required(`Username is required`)
      .min(3, `Username must be at least 3 characters`)
      .max(20, `Username must be no longer than 20 characters`),
    password: Yup.string()
      .required(`Password required`)
      .min(8, `Password you entered should not be less than 8 characters`)
      .max(20, `Password you must not than 20 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    setIsLoading(true);
    const data = {
      username: values.username,
      password: values.password,
    };
    ApiConfig.post(`auth/login`, data)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          const {
            isAuthenticated,
            token,
            roles,
            firstName,
            lastName,
            email,
            refreshTokenExpiration,
            expiresOn,
            message,
          } = res.data;
          if (isAuthenticated) {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                accessToken: token,
                expiresOn,
                refreshTokenExpiration,
                roles,
                firstName,
                lastName,
                email,
                username: values.username,
              },
            });

            toast.success(message);
            if (roles.includes('Admin')) {
              navigate('/dashboard');
            } else if (roles.includes('Shop')) {
              navigate('/shops');
            } else {
              navigate('/user');
            }
          } else {
            toast.warn(
              'The control panel cannot be accessed. Because you do not have permission to access, please try again',
            );
          }
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err?.response?.data);
      });
  };
  // ----------------------------------------------------------------------------------->
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Fragment>
      <Loading isLoading={isLoading} />
      <div className='ht-100v d-flex bg-page'>
        <div className='card shadow-2 border-0 pd-25 mx-auto wd-400 text-center bd-1 align-self-center'>
          <h4 className='card-title mt-3 text-center'>Sing In</h4>
          <p className='text-center'>Sing in to your account</p>
          <form onSubmit={formik.handleSubmit}>
            <div className='text-left mt-3 mb-2'>
              <label htmlFor='username'>Username</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <BiSolidUser />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='username'
                  id='username'
                  type='text'
                  {...formik.getFieldProps('username')}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className='text-danger tx'>{formik.errors.username}</div>
              ) : null}
            </div>
            <div className='text-left mb-3'>
              <label htmlFor='password'>Password</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <FaLock />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='password'
                  id='password'
                  type={`${isShowPassword ? 'text' : 'password'}`}
                  {...formik.getFieldProps('password')}
                />
                <span
                  className='input-group-text bg-transparent border-0 pr-3'
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    toggleShowingPassword(isShowPassword, setIsShowPassword)
                  }
                >
                  {isShowPassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className='text-danger tx'>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-lg btn-custom-primary btn-block tx-16 hover-white'
              >
                Login
              </button>
            </div>
            <p className='text-center'>
              Don&apos;t have an account ?
              <Link className='text-primary' to='/auth/register'>
                {' '}
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
