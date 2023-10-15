import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { sendData } from '../../redux/actions/api/sendData';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function AddCategory() {
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
    titleAr: '',
    titleEn: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    titleAr: Yup.string()
      .required(`Title [ar] is required`)
      .min(3, `The title [ar] you should not be less than 3 characters`)
      .max(70, `The title [ar] you must not than 70 characters`),
    titleEn: Yup.string()
      .required(`Title [en] is required`)
      .min(3, `The title [en] you should not be less than 3 characters`)
      .max(70, `The title [en] you must not than 70 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      titleAr: values?.titleAr,
      titleEn: values?.titleEn,
    };

    dispatch(
      sendData(
        `category/addCategory`,
        accessToken,
        data,
        navigate,
        '/categories',
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
        title='Add Category'
        textActive='Add'
        items={[{ name: 'Categories', url: '/categories' }]}
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
                        htmlFor='titleAr'
                        className='form-control-label active'
                      >
                        Title [AR] <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='titleAr'
                        {...formik.getFieldProps('titleAr')}
                      />
                      {formik.touched.titleAr && formik.errors.titleAr ? (
                        <div className='tx-danger'>{formik.errors.titleAr}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='titleEn'
                        className='form-control-label active'
                      >
                        Title [EN] <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='titleEn'
                        {...formik.getFieldProps('titleEn')}
                      />
                      {formik.touched.titleEn && formik.errors.titleEn ? (
                        <div className='tx-danger'>{formik.errors.titleEn}</div>
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
