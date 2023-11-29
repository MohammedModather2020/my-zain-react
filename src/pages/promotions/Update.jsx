import * as Yup from 'yup';
import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import { updateData } from '../../redux/actions/api/updateData';
import { checkIfFilesAreTooBig } from '../../utils/validation/checkIfFilesAreTooBig';
import { checkIfFilesAreCorrectType } from '../../utils/validation/checkIfFilesAreCorrectType';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function UpdatePromotions() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState();
  const { accessToken } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    name: location?.state?.name,
    image: location?.state?.image,
    titleAr: location?.state?.titleAr,
    titleEn: location?.state?.titleEn,
    descriptionAr: location?.state?.descriptionAr,
    descriptionEn: location?.state?.descriptionEn,
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(`Name is required`)
      .min(3, `The Name you should not be less than 3 characters`)
      .max(70, `The Name you must not than 70 characters`),
    titleAr: Yup.string()
      .required(`Title [ar] is required`)
      .min(3, `The title [ar] you should not be less than 3 characters`)
      .max(70, `The title [ar] you must not than 70 characters`),
    titleEn: Yup.string()
      .required(`Title [en] is required`)
      .min(3, `The title [en] you should not be less than 3 characters`)
      .max(70, `The title [en] you must not than 70 characters`),
    image: Yup.mixed()
      .test(
        'fileSize',
        'The file size is too large, and the maximum file size is 2MB',
        (value) => !value || checkIfFilesAreTooBig(value),
      )
      .test(
        'fileFormat',
        'The uploaded file is in an unsupported format.',
        (value) => !value || checkIfFilesAreCorrectType(value),
      ),
    descriptionAr: Yup.string()
      .required(`Description [ar] required`)
      .min(1, `The Description [ar] you should not be less than one character`)
      .max(1000, `The Description [ar] you must not than 1000 characters`),
    descriptionEn: Yup.string()
      .required(`Description [en] required`)
      .min(1, `The Description [en] you should not be less than one character`)
      .max(1000, `The Description [en] you must not than 1000 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    // var data = new FormData();
    const imageData = imageBase64.split(',')[1];
    // const bytes = atob(imageData);

    // // Convert bytes to ArrayBuffer
    // const arrayBuffer = new ArrayBuffer(bytes.length);
    // const uint8Array = new Uint8Array(arrayBuffer);
    // for (let i = 0; i < bytes.length; i++) {
    //   uint8Array[i] = bytes.charCodeAt(i);
    // }
    const data = {
      id,
      image: imageData,
      name: values?.name,
      titleAr: values?.titleAr,
      titleEn: values?.titleEn,
      descriptionAr: values?.descriptionAr,
      descriptionEn: values?.descriptionEn,
    };
    // data.append('image', formik.values?.image);
    // data.append('id', id);
    // data.append('name', values?.name);
    // data.append('titleAr', values?.titleAr);
    // data.append('titleEn', values?.titleEn);
    // data.append('descriptionAr', values?.descriptionAr);
    // data.append('descriptionEn', values?.descriptionEn);

    dispatch(
      updateData(
        `promotion/updatePromotion`,
        accessToken,
        data,
        navigate,
        '/promotions',
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
        title='Update Promotion'
        textActive='Update'
        items={[{ name: 'Promotions', url: '/promotions' }]}
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
                        Name <span className='tx-danger'>*</span>
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
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='image'
                        className='form-control-label active'
                      >
                        Image <span className='tx-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='file'
                        id='image'
                        name='image'
                        accept='image/jpeg,image/png,image/svg'
                        onChange={(e) => {
                          formik.setFieldValue('image', e.target.files[0]);
                          // const reader = new FileReader();
                          // reader.readAsDataURL(e.target.files[0]);
                          // reader.onloadend = () => {
                          //   setImageBase64(reader.result);
                          // };
                        }}
                      />
                      {formik.touched.image && formik.errors.image ? (
                        <div className='tx-danger'>{formik.errors.image}</div>
                      ) : null}
                    </div>
                  </div>
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
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='descriptionAr'
                        className='form-control-label active'
                      >
                        Description [AR]
                        <span className='tx-danger'>*</span>
                      </label>
                      <textarea
                        className='form-control'
                        type='text'
                        rows={6}
                        name='descriptionAr'
                        id='descriptionAr'
                        {...formik.getFieldProps('descriptionAr')}
                      ></textarea>
                      {formik.touched.descriptionAr &&
                      formik.errors.descriptionAr ? (
                        <div className='tx-danger'>
                          {formik.errors.descriptionAr}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='descriptionEn'
                        className='form-control-label active'
                      >
                        Description [EN] <span className='tx-danger'>*</span>
                      </label>
                      <textarea
                        className='form-control'
                        type='text'
                        rows={6}
                        id='descriptionEn'
                        name='descriptionEn'
                        {...formik.getFieldProps('descriptionEn')}
                      ></textarea>
                      {formik.touched.descriptionEn &&
                      formik.errors.descriptionEn ? (
                        <div className='tx-danger'>
                          {formik.errors.descriptionEn}
                        </div>
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
