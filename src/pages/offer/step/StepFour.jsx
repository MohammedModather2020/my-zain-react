import PropTypes from 'prop-types';
import { disabledFiledByRole } from '../../../utils/disabledFiledByRole';
import { requiredFiledByRole } from '../../../utils/requiredFiledByRole';

export default function StepFour({ formik, roles }) {
  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='subs' className='form-control-label'>
            Subs <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='subs'
            required
            name='subs'
            {...formik.getFieldProps('subs')}
          />
          {formik.touched.subs && formik.errors.subs ? (
            <div className='tx-danger'>{formik.errors.subs}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='unsubs' className='form-control-label'>
            Un Subs <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='unsubs'
            required
            name='unsubs'
            {...formik.getFieldProps('unsubs')}
          />
          {formik.touched.unsubs && formik.errors.unsubs ? (
            <div className='tx-danger'>{formik.errors.unsubs}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='tagId' className='form-control-label'>
            Tag ID <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required={requiredFiledByRole(roles, 'ProductOffering')}
            disabled={disabledFiledByRole(roles, 'ProductOffering')}
            id='tagId'
            name='tagId'
            {...formik.getFieldProps('tagId')}
          />
          {formik.touched.tagId && formik.errors.tagId ? (
            <div className='tx-danger'>{formik.errors.tagId}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='daId' className='form-control-label'>
            Da ID <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='daId'
            required={requiredFiledByRole(roles, 'ProductOffering')}
            disabled={disabledFiledByRole(roles, 'ProductOffering')}
            name='daId'
            {...formik.getFieldProps('daId')}
          />
          {formik.touched.daId && formik.errors.daId ? (
            <div className='tx-danger'>{formik.errors.daId}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='ucId' className='form-control-label'>
            Uc ID <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='ucId'
            name='ucId'
            required={requiredFiledByRole(roles, 'ProductOffering')}
            disabled={disabledFiledByRole(roles, 'ProductOffering')}
            {...formik.getFieldProps('ucId')}
          />
          {formik.touched.ucId && formik.errors.ucId ? (
            <div className='tx-danger'>{formik.errors.ucId}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

StepFour.propTypes = {
  formik: PropTypes.object,
  roles: PropTypes.array,
};
