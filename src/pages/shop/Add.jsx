import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import FormWizard from '../../components/form/FormWizard';
import { Step } from '@haribhandari/react-step';
import { sendData } from '../../redux/actions/api/sendData';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import StepOne from './step/StepOne';
import StepTwo from './step/StepTwo';
import StepThree from './step/StepThree';
import ButtonActionStep from '../../components/form/step/ButtonAction';

export default function AddShop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
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
    cityAr: '',
    cityEn: '',
    stateAr: '',
    stateEn: '',
    sattothuFrom: '',
    sattothuTo: '',
    friFrom: '',
    friTo: '',
    status: '',
    action: '',
    addressAr: '',
    addressEn: '',
    latitude: '',
    longtitude: '',
    searchKeywords1: '',
    searchKeywords2: '',
    distance: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    nameAr: Yup.string()
      .required(`Name [AR] is required`)
      .min(1, `The Name [AR] you should not be less than one character`)
      .max(50, `The Name [AR] you must not than 30 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      shopNameEn: values?.nameEn,
      shopNameAr: values?.nameAr,
      sattothuFrom: values?.sattothuFrom,
      sattothuTo: values?.sattothuTo,
      friFrom: values?.friFrom,
      friTo: values?.friTo,
      state: values?.stateAr,
      city: values?.cityAr,
      addressEn: values?.addressEn,
      addressAr: values?.addressAr,
      latitude: values?.latitude,
      longtitude: values?.longtitude,
      searchKeywords: values?.searchKeywords1,
      distance: values?.distance,
      action: values?.action,
      cityEn: values?.cityEn,
      stateEn: values?.cityEn,
      searchKeywords2: values?.searchKeywords2,
      status: values?.status,
    };
    dispatch(sendData(`shop/addShop`, accessToken, data, navigate, '/shops'));
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
        title='Add Shops'
        textActive='Add'
        items={[{ name: 'Shops', url: '/shops' }]}
      />
      <div className='row row-xs clearfix'>
        <div className='col-md-12 col-lg-12'>
          <div className='card mg-b-20 h-100'>
            <div className='card-body collapse show px-5' id='collapse1'>
              <form
                className='form-layout form-layout-1'
                onSubmit={formik.handleSubmit}
              >
                <FormWizard activeStep={activeStep}>
                  <Step label='One'>
                    <StepOne formik={formik} />
                  </Step>
                  <Step label='Two'>
                    <StepTwo formik={formik} />
                  </Step>
                  <Step label='Three'>
                    <StepThree formik={formik} />
                  </Step>
                </FormWizard>
                <ButtonActionStep
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  total={3}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
