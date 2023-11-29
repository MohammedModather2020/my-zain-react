import * as Yup from 'yup';
import { Fragment, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { sendData } from '../../../../../redux/actions/api/sendData';
import { Loading } from '../../../../../components/helper/loading/Loading';
import useData from '../../../../../hooks/useData';
import Breadcrumb from '../../../../../components/breadcrumb/Breadcrumb';

export default function VasDspAddIvrProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { accessToken, username } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  const { data: categories } = useData(
    accessToken,
    'vasdsp/getAllProductCategories',
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    category: location?.state?.category,
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    category: Yup.string().required(`Category is required`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      productName: location?.state?.productName,
      code: location?.state?.code,
      productType: location?.state?.productType,
      category: values?.category,
      productNameAr: location?.state?.productNameAr,
      productPrice: location?.state?.productPrice,
      accessMethod: location?.state?.accessMethod,
      updatedBy: username,
    };
    dispatch(
      sendData(
        `vasdsp/addTopProduct`,
        accessToken,
        data,
        navigate,
        '/vas-dsp/products/ivr',
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
        title='Add VAS IVR product'
        textActive='Add'
        items={[{ name: 'VAS IVR Products', url: '/vas-dsp/products/ivr' }]}
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
                    <div className='col-lg-6'>
                      <div className='form-group'>
                        <label
                          htmlFor='category'
                          className='form-control-label active'
                        >
                          Category <span className='tx-danger'>*</span>
                        </label>
                        <select
                          className='custom-select py-0'
                          value={formik.values.category}
                          {...formik.getFieldProps('category')}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option
                            className='placeholder'
                            selected
                            disabled
                            value=''
                          >
                            Please select category
                          </option>
                          {categories &&
                            categories?.map((category) => (
                              <option key={category?.id} value={category?.id}>
                                {category.name}
                              </option>
                            ))}
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                          <div className='tx-danger'>
                            {formik.errors.category}
                          </div>
                        ) : null}
                      </div>
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
