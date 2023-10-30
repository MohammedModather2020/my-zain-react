import PropTypes from 'prop-types';
import { BsSend } from 'react-icons/bs';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default function ButtonActionStep({ activeStep, setActiveStep, total }) {
  return (
    <div className='form-layout-footer text-center mt-5 d-flex justify-content-between align-items-center'>
      <button
        className={`btn mr-4 d-flex align-items-center py-2  ${
          activeStep === 1 ? 'disabled' : 'btn-custom-primary'
        }`}
        type='button'
        onClick={() =>
          setActiveStep((prevActive) => (prevActive > 1 ? prevActive - 1 : 1))
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
          activeStep === total ? 'disabled' : 'btn-custom-primary'
        }`}
        type='button'
        onClick={() =>
          setActiveStep((prevActive) =>
            prevActive < total ? prevActive + 1 : total,
          )
        }
      >
        Next
        <MdOutlineKeyboardArrowRight
          color={activeStep == total ? 'black' : 'white'}
          size={20}
          className='ml-2'
        />
      </button>
      <button
        className={`btn btn-custom-primary align-items-center py-2 mr-4 ${
          activeStep == total ? 'd-flex' : 'd-none'
        }`}
        type='submit'
      >
        <BsSend className='mr-2' /> Submit
      </button>
    </div>
  );
}

ButtonActionStep.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
