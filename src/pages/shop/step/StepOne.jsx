import PropTypes from 'prop-types';

export default function StepOne({ formik }) {
  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='nameAr' className='form-control-label active'>
            Name [AR] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='nameAr'
            required
            name='nameAr'
            {...formik.getFieldProps('nameAr')}
          />
          {formik.touched.nameAr && formik.errors.nameAr ? (
            <div className='tx-danger'>{formik.errors.nameAr}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='nameEn' className='form-control-label active'>
            Name [EN] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='nameEn'
            name='nameEn'
            {...formik.getFieldProps('nameEn')}
          />
          {formik.touched.nameEn && formik.errors.nameEn ? (
            <div className='tx-danger'>{formik.errors.nameEn}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='cityAr' className='form-control-label active'>
            City [AR] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='cityAr'
            required
            name='cityAr'
            {...formik.getFieldProps('cityAr')}
          />
          {formik.touched.cityAr && formik.errors.cityAr ? (
            <div className='tx-danger'>{formik.errors.cityAr}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='cityEn' className='form-control-label active'>
            City [EN] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='cityEn'
            name='cityEn'
            {...formik.getFieldProps('cityEn')}
          />
          {formik.touched.cityEn && formik.errors.cityEn ? (
            <div className='tx-danger'>{formik.errors.cityEn}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='stateAr' className='form-control-label active'>
            State [AR] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='stateAr'
            required
            name='stateAr'
            {...formik.getFieldProps('stateAr')}
          />
          {formik.touched.stateAr && formik.errors.stateAr ? (
            <div className='tx-danger'>{formik.errors.stateAr}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='stateEn' className='form-control-label active'>
            State [EN] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='stateEn'
            name='stateEn'
            {...formik.getFieldProps('stateEn')}
          />
          {formik.touched.stateEn && formik.errors.stateEn ? (
            <div className='tx-danger'>{formik.errors.stateEn}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

StepOne.propTypes = {
  formik: PropTypes.object,
};