import PropTypes from 'prop-types';

export default function StepThree({ formik }) {
  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='tariff' className='form-control-label'>
            Tariff <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='tariff'
            name='tariff'
            {...formik.getFieldProps('tariff')}
          />
          {formik.touched.tariff && formik.errors.tariff ? (
            <div className='tx-danger'>{formik.errors.tariff}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='newTariff' className='form-control-label'>
            New Tariff <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='newTariff'
            name='newTariff'
            {...formik.getFieldProps('newTariff')}
          />
          {formik.touched.newTariff && formik.errors.newTariff ? (
            <div className='tx-danger'>{formik.errors.newTariff}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='newTariffActiveDate' className='form-control-label'>
            New Tariff Active Date <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='date'
            id='newTariffActiveDate'
            name='newTariffActiveDate'
            {...formik.getFieldProps('newTariffActiveDate')}
          />
          {formik.touched.newTariffActiveDate &&
          formik.errors.newTariffActiveDate ? (
            <div className='tx-danger'>{formik.errors.newTariffActiveDate}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6 mt-4'>
        <div className='form-group pos-relative mt-3'>
          <input
            className='custom-control-input'
            type='checkbox'
            id='active'
            required
            checked={formik?.values?.active}
            name='active'
            {...formik.getFieldProps('active')}
          />
          <label className='custom-control-label ml-4' htmlFor='active'>
            Is Active
          </label>
          {formik.touched.active && formik.errors.active ? (
            <div className='tx-danger'>{formik.errors.active}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='offerChannel' className='form-control-label'>
            Offer Channel <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='offerChannel'
            required
            name='offerChannel'
            {...formik.getFieldProps('offerChannel')}
          />
          {formik.touched.offerChannel && formik.errors.offerChannel ? (
            <div className='tx-danger'>{formik.errors.offerChannel}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='keyword' className='form-control-label'>
            keyword <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='keyword'
            required
            name='keyword'
            {...formik.getFieldProps('keyword')}
          />
          {formik.touched.keyword && formik.errors.keyword ? (
            <div className='tx-danger'>{formik.errors.keyword}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

StepThree.propTypes = {
  formik: PropTypes.object,
};
