import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toggleShowingPassword } from '../../../utils/toggleShowingPassword';
import { checkComplicityPassword } from '../../../utils/checkComplicityPassword';
import { LOGIN_SUCCESS } from '../../../redux/type';
import { Loading } from '../../../components/helper/loading/Loading';
import ApiConfig from '../../../api/ApiConfig';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required(`FirstName is required`)
      .min(3, `FirstName must be at least 3 characters`)
      .max(20, `FirstName must be no longer than 20 characters`),
    lastName: Yup.string()
      .required(`LastName is required`)
      .min(3, `LastName must be at least 3 characters`)
      .max(20, `LastName must be no longer than 20 characters`),
    username: Yup.string()
      .required(`Username is required`)
      .min(3, `Username must be at least 3 characters`)
      .max(20, `Username must be no longer than 20 characters`),
    email: Yup.string()
      .required(`email required`)
      .min(6, `The email you should not be less than 6 characters`)
      .max(40, `The email you must not than 40 characters`)
      .email('Invalid email format'),
    password: Yup.string()
      .required(`Password required`)
      .min(8, `Password you entered should not be less than 8 characters`)
      .max(20, `Password you must not than 20 characters`)
      .matches(
        checkComplicityPassword,
        'Password does not meet complexity requirements',
      ),
    repeatPassword: Yup.string()
      .required(`Please Enter your repeat password`)
      .min(8, `The repeat password you should not be less than 8 characters`)
      .max(20, `The repeat password you must not than 20 characters`)
      .oneOf([Yup.ref('new'), null], 'password repeat do not match equals'),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    setIsLoading(true);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
    };
    ApiConfig.post(`auth/register`, data)
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
              accessToken: token,
              expiresOn,
              refreshTokenExpiration,
              roles,
              firstName,
              lastName,
              email,
              username: values.username,
            });

            toast.success(message);
            if (roles.includes('Admin')) {
              navigate('/dashboard/statistics');
            } else if (roles.includes('Shop')) {
              navigate('/shops');
            } else {
              navigate('/categories');
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
          <h4 className='card-title mt-3 text-center'>Create Account</h4>
          <p className='text-center'>Get started with your account</p>
          <form onSubmit={formik.handleSubmit}>
            <div className='text-left mt-3 mb-2'>
              <label htmlFor='firstName'>FirstName</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <BiSolidUser />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='firstName'
                  id='firstName'
                  type='text'
                  {...formik.getFieldProps('firstName')}
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-danger tx'>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className='text-left mt-3 mb-2'>
              <label htmlFor='lastName'>LastName</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <BiSolidUser />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='lastName'
                  id='lastName'
                  type='text'
                  {...formik.getFieldProps('lastName')}
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='text-danger tx'>{formik.errors.lastName}</div>
              ) : null}
            </div>
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
            <div className='text-left mt-3 mb-2'>
              <label htmlFor='email'>Email</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <MdEmail />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='email'
                  id='email'
                  type='text'
                  {...formik.getFieldProps('email')}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className='text-danger tx'>{formik.errors.email}</div>
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
            <div className='text-left mb-3'>
              <label htmlFor='repeatPassword'>Repeat password</label>
              <div className='form-group input-group mb-1 border-gray rounded-5'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <FaLock />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-0'
                  name='repeatPassword'
                  id='repeatPassword'
                  type={`${isShowRepeatPassword ? 'text' : 'password'}`}
                  {...formik.getFieldProps('repeatPassword')}
                />
                <span
                  className='input-group-text bg-transparent border-0 pr-3'
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    toggleShowingPassword(
                      isShowRepeatPassword,
                      setIsShowRepeatPassword,
                    )
                  }
                >
                  {isShowRepeatPassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </div>
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <div className='text-danger tx'>
                  {formik.errors.repeatPassword}
                </div>
              ) : null}
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-lg btn-custom-primary btn-block tx-16 hover-white'
              >
                Create Account
              </button>
            </div>
            <p className='text-center'>
              Already Singed Up ?
              <Link className='text-primary' to='/auth/login'>
                {' '}
                Sing In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
