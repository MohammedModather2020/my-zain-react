import * as Yup from 'yup';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { Loading } from '../../../../components/helper/loading/Loading';
import { sendData } from '../../../../redux/actions/api/sendData';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';

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
    nameAr: '',
    nameEn: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    nameAr: Yup.string()
      .required(`Name [ar] is required`)
      .min(3, `The Name [ar] you should not be less than 3 characters`)
      .max(70, `The Name [ar] you must not than 70 characters`),
    nameEn: Yup.string()
      .required(`Name [en] is required`)
      .min(3, `The Name [en] you should not be less than 3 characters`)
      .max(70, `The Name [en] you must not than 70 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      name_ar: values?.nameAr,
      name: values?.nameEn,
    };

    dispatch(
      sendData(
        `vasdsp/addProductCategory`,
        accessToken,
        data,
        navigate,
        '/vas-dsp/categories',
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
        title='Add Vas Category'
        textActive='Add'
        items={[{ name: 'VAS Categories', url: '/vas-dsp/categories' }]}
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
                        htmlFor='nameAr'
                        className='form-control-label active'
                      >
                        Name [AR] <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='nameAr'
                        {...formik.getFieldProps('nameAr')}
                      />
                      {formik.touched.nameAr && formik.errors.nameAr ? (
                        <div className='tx-danger'>{formik.errors.nameAr}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='nameEn'
                        className='form-control-label active'
                      >
                        Name [EN] <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='nameEn'
                        {...formik.getFieldProps('nameEn')}
                      />
                      {formik.touched.nameEn && formik.errors.nameEn ? (
                        <div className='tx-danger'>{formik.errors.nameEn}</div>
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
