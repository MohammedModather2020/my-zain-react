import PropTypes from 'prop-types';
export default function StepThree({ formik }) {
  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='sattothuFrom' className='form-control-label active'>
            Saturday - Thursday From <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='time'
            id='sattothuFrom'
            required
            name='sattothuFrom'
            {...formik.getFieldProps('sattothuFrom')}
          />
          {formik.touched.sattothuFrom && formik.errors.sattothuFrom ? (
            <div className='tx-danger'>{formik.errors.sattothuFrom}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='sattothuTo' className='form-control-label active'>
            Saturday - Thursday To <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='time'
            required
            id='sattothuTo'
            name='sattothuTo'
            {...formik.getFieldProps('sattothuTo')}
          />
          {formik.touched.sattothuTo && formik.errors.sattothuTo ? (
            <div className='tx-danger'>{formik.errors.sattothuTo}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='friFrom' className='form-control-label active'>
            Friday From <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='friFrom'
            required
            name='friFrom'
            {...formik.getFieldProps('friFrom')}
          />
          {formik.touched.friFrom && formik.errors.friFrom ? (
            <div className='tx-danger'>{formik.errors.friFrom}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='friTo' className='form-control-label active'>
            Friday To <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='friTo'
            name='friTo'
            {...formik.getFieldProps('friTo')}
          />
          {formik.touched.friTo && formik.errors.friTo ? (
            <div className='tx-danger'>{formik.errors.friTo}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='status' className='form-control-label active'>
            Status <span className='tx-danger'>*</span>
          </label>
          <select
            className='custom-select py-0'
            id='status'
            required
            name='status'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...formik.getFieldProps('status')}
          >
            <option className='placeholder' selected disabled value=''>
              Please select status
            </option>
            <option value='1'>ON</option>
            <option value='0'>OFF</option>
          </select>
          {formik.touched.status && formik.errors.status ? (
            <div className='tx-danger'>{formik.errors.status}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='action' className='form-control-label active'>
            Action <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='action'
            name='action'
            {...formik.getFieldProps('action')}
          />
          {formik.touched.action && formik.errors.action ? (
            <div className='tx-danger'>{formik.errors.action}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

StepThree.propTypes = {
  formik: PropTypes.object,
};
