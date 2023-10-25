import PropTypes from 'prop-types';
import { MultiStepForm } from '@haribhandari/react-step';

export default function FormWizard({ activeStep, children }) {
  return <MultiStepForm activeStep={activeStep}>{children}</MultiStepForm>;
}

FormWizard.propTypes = {
  activeStep: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};
