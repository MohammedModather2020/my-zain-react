import { Step } from '@haribhandari/react-step';
import { requiredFiledByRole } from '../../../utils/requiredFiledByRole';
import { disabledFiledByRole } from '../../../utils/disabledFiledByRole';

export default function StepTwo({ formik, roles }) {
  return (
    <Step label='Two'>
      <div className='row mg-b-25'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <label htmlFor='titleAr' className='form-control-label active'>
              Title [AR] <span className='tx-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              id='titleAr'
              required={requiredFiledByRole(roles, 'Business')}
              disabled={disabledFiledByRole(roles, 'Business')}
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
            <label htmlFor='titleEn' className='form-control-label active'>
              Title [EN] <span className='tx-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              required={requiredFiledByRole(roles, 'Business')}
              disabled={disabledFiledByRole(roles, 'Business')}
              id='titleEn'
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
              required={requiredFiledByRole(roles, 'Business')}
              disabled={disabledFiledByRole(roles, 'Business')}
              name='descriptionAr'
              id='descriptionAr'
              {...formik.getFieldProps('descriptionAr')}
            ></textarea>
            {formik.touched.descriptionAr && formik.errors.descriptionAr ? (
              <div className='tx-danger'>{formik.errors.descriptionAr}</div>
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
              required={requiredFiledByRole(roles, 'Business')}
              disabled={disabledFiledByRole(roles, 'Business')}
              id='descriptionEn'
              name='descriptionEn'
              {...formik.getFieldProps('descriptionEn')}
            ></textarea>
            {formik.touched.descriptionEn && formik.errors.descriptionEn ? (
              <div className='tx-danger'>{formik.errors.descriptionEn}</div>
            ) : null}
          </div>
        </div>
      </div>
    </Step>
  );
}
