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
import StepFour from './step/StepFour';
import ButtonActionStep from '../../components/form/step/ButtonAction';

export default function AddOffer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [segmentsSelected, setSegmentsSelected] = useState();
  const { accessToken, username, roles } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    offerId: '',
    offerCategoryId: '',
    offerPackageId: '',
    segmentIds: '',
    titleAr: '',
    titleEn: '',
    descriptionAr: '',
    descriptionEn: '',
    tariff: '',
    newTariff: '',
    newTariffActiveDate: '',
    offerChannel: '',
    keyword: '',
    active: false,
    subs: '',
    unsubs: '',
    tagId: '',
    ucId: '',
    daId: '',
  };
  // ----------------------------------------------------------------------------------->
  const validationSchema = Yup.object({
    // offerId: Yup.string()
    //   .required(`OfferId is required`)
    //   .min(1, `The offerId you should not be less than one character`)
    //   .max(30, `The offerId you must not than 30 characters`),
  });
  // ----------------------------------------------------------------------------------->
  const onSubmit = (values) => {
    const data = {
      active: values.active,
      descAr: values.descriptionAr,
      descEn: values.descriptionEn,
      modifiedBy: username,
      newTariff: values?.newTariff,
      newTariffActiveDate: values?.newTariffActiveDate,
      offerId: values?.offerId,
      subs: values?.subs,
      tagId: values?.tagId,
      tariff: values?.tariff,
      titleAr: values?.titleAr,
      titleEn: values?.titleEn,
      unsubs: values?.unsubs,
      offerCategoryId: values?.offerCategoryId,
      offerPackageId: values?.offerPackageId,
      segmentIds: segmentsSelected.map((segment) => segment?.id),
      keyword: values?.keyword,
      daId: values?.daId,
      ucId: values?.ucId,
      offerChannel: values?.offerChannel,
    };
    dispatch(
      sendData(`offer/addOffer`, accessToken, data, navigate, '/offers'),
    );
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const onSelect = (selectedList, setItem) => {
    setItem([...selectedList]);
  };
  const onRemove = (selectedList, setItem) => {
    setItem([...selectedList]);
  };
  return (
    <Fragment>
      <Loading isLoading={loading} />
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
                  <Step label='One'>
                    <StepOne
                      formik={formik}
                      accessToken={accessToken}
                      setSegmentsSelected={setSegmentsSelected}
                      segmentsSelected={segmentsSelected}
                      onRemove={onRemove}
                      onSelect={onSelect}
                      roles={roles}
                    />
                  </Step>
                  <Step label='Two'>
                    <StepTwo formik={formik} roles={roles} />
                  </Step>
                  <Step label='Three'>
                    <StepThree formik={formik} roles={roles} />
                  </Step>
                  <Step label='Four'>
                    <StepFour formik={formik} roles={roles} />
                  </Step>
                </FormWizard>
                <ButtonActionStep
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  total={4}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
