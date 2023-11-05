import * as Yup from 'yup';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { updateData } from '../../redux/actions/api/updateData';
import FormWizard from '../../components/form/FormWizard';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { BsSend } from 'react-icons/bs';
import { Loading } from '../../components/helper/loading/Loading';
import { Step } from '@haribhandari/react-step';
import useData from '../../hooks/useData';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import StepOne from './step/StepOne';
import StepTwo from './step/StepTwo';
import StepThree from './step/StepThree';
import StepFour from './step/StepFour';

export default function UpdateOffer() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [segmentsSelected, setSegmentsSelected] = useState();
  const { accessToken, username, roles } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.api);
  const { data: segmentsInOffer } = useData(
    accessToken,
    `offer/getSegmentsInOffer?id=${state?.id}`,
  );
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    error && toast.error(error);
  }, [dispatch, error, loading]);
  // ----------------------------------------------------------------------------------->
  const initialValues = {
    offerId: state?.offerId,
    offerCategoryId: state?.offerCategory?.id,
    offerPackageId: state?.offerPackage?.id,
    segmentIds: segmentsInOffer,
    titleAr: state?.titleAr,
    titleEn: state?.titleEn,
    descriptionAr: state?.descAr,
    descriptionEn: state?.descEn,
    tariff: state?.tariff,
    newTariff: state?.newTariff,
    newTariffActiveDate: state?.newTariffActiveDate,
    offerChannel: state?.offerChannel,
    keyword: state?.keyword,
    active: state?.active,
    subs: state?.subs,
    unsubs: state?.unsubs,
    tagId: state?.tagId,
    ucId: state?.ucId,
    daId: state?.daId,
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
      id: state?.id,
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
      segmentIds: segmentsSelected.map((segment) => Number(segment?.id)),
      keyword: values?.keyword,
      daId: values?.daId,
      ucId: values?.ucId,
      offerChannel: values?.offerChannel,
    };

    dispatch(
      updateData(
        `offer/updateOffer`,
        accessToken,
        data,
        navigate,
        '/offers',
        true,
      ),
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
        title='Update Offer'
        textActive='Update'
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
                      segmentsInOffer={segmentsInOffer}
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
                <div className='form-layout-footer text-center mt-5 d-flex justify-content-between align-items-center'>
                  <button
                    className={`btn mr-4 d-flex align-items-center py-2  ${
                      activeStep === 1 ? 'disabled' : 'btn-custom-primary'
                    }`}
                    type='button'
                    onClick={() =>
                      setActiveStep((prevActive) =>
                        prevActive > 1 ? prevActive - 1 : 1,
                      )
                    }
                  >
                    <MdOutlineKeyboardArrowLeft
                      color={activeStep == 1 ? 'black' : 'white'}
                      size={20}
                      className='mr-2'
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
