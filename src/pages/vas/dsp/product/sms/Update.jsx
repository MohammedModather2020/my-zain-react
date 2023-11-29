import * as Yup from 'yup';
import { Fragment, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { updateData } from '../../../../../redux/actions/api/updateData';
import { isNumber } from '../../../../../utils/validation/isNumber';
import { Loading } from '../../../../../components/helper/loading/Loading';
import Breadcrumb from '../../../../../components/breadcrumb/Breadcrumb';

export default function VasDspUpdateSmsProduct() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { accessToken, username } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  console.log(location.state)
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    price: location?.state?.productPrice,
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    price: Yup.string()
      .required(`Price is required`)
      .min(1, `The Price you should not be less than one digit`)
      .max(6, `The Price you must not than 6 digits`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      id,
      productName: location?.state?.productName,
      code: location?.state?.code,
      productType: location?.state?.productType,
      category: location?.state?.category,
      productNameAr: location?.state?.productNameAr,
      productPrice: values?.price,
      accessMethod: location?.state?.accessMethod,
      updatedBy: username,
    };

    dispatch(
      updateData(
        `vasdsp/updateSMSTopProductsPrice`,
        accessToken,
        data,
        navigate,
        '/vas-dsp/products/sms',
        true,
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
        title='Update VAS Product SMS'
        textActive='Update'
        items={[{ name: 'VAS Products SMS', url: '/vas-dsp/products/sms' }]}
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
                        htmlFor='price'
                        className='form-control-label active'
                      >
                        Price <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        onInput={isNumber}
                        name='price'
                        {...formik.getFieldProps('price')}
                      />
                      {formik.touched.price && formik.errors.price ? (
                        <div className='tx-danger'>{formik.errors.price}</div>
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
