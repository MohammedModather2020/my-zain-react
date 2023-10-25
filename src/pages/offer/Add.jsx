import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Loading } from '../../components/helper/loading/Loading';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { BsSend } from 'react-icons/bs';
import FormWizard from '../../components/form/FormWizard';
import { Step } from '@haribhandari/react-step';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { sendData } from '../../redux/actions/api/sendData';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import StepOne from './step/StepOne';

export default function AddOffer() {
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
    titleAr: '',
    titleEn: '',
    descriptionAr: '',
    descriptionEn: '',
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
    const data = {};
    dispatch(sendData(`offer/addOffer`, accessToken, data, navigate, '/roles'));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Fragment>
      {/* <Loading isLoading={loading} /> */}
      <Breadcrumb
        title='Add Offer'
        textActive='Add'
        items={[{ name: 'Offers', url: '/offers' }]}
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
                  <StepOne formik={formik} />
                  <Step label='Two'>
                    <p>Two</p>
                  </Step>
                  <Step label='Three'>
                    <p>One</p>
                  </Step>
                  <Step label='Four'>
                    <p>One</p>
                  </Step>
                </FormWizard>
                <div className='form-layout-footer text-center mt-5 d-flex justify-content-between align-items-center'>
                  <button
                    className={`btn mr-4 d-flex align-items-center py-2  ${
                      activeStep === 1 ? 'disabled' : 'btn-custom-primary'
                    }`}
                    type='button'
                  >
                    <MdOutlineKeyboardArrowLeft
                      color={activeStep == 1 ? 'black' : 'white'}
                      size={20}
                      className='mr-2'
                      onClick={() =>
                        setActiveStep((prevActive) =>
                          prevActive > 1 ? prevActive - 1 : 1,
                        )
                      }
                    />
                    Previous
                  </button>
                  <button
                    className={`btn mr-4 d-flex align-items-center py-2 ${
                      activeStep === 4 ? 'disabled' : 'btn-custom-primary'
                    }`}
                    type='button'
                    onClick={() =>
                      setActiveStep((prevActive) =>
                        prevActive < 4 ? prevActive + 1 : 4,
                      )
                    }
                  >
                    Next
                    <MdOutlineKeyboardArrowRight
                      color={activeStep == 4 ? 'black' : 'white'}
                      size={20}
                      className='ml-2'
                    />
                  </button>
                  <button
                    className={`btn btn-custom-primary align-items-center py-2 mr-4 ${
                      activeStep == 4 ? 'd-flex' : 'd-none'
                    }`}
                    type='submit'
                  >
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
