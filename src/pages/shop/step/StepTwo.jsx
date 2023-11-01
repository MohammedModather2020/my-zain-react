import PropTypes from 'prop-types';
export default function StepTwo({ formik }) {
  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='addressAr' className='form-control-label active'>
            Address [AR] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='addressAr'
            required
            name='addressAr'
            {...formik.getFieldProps('addressAr')}
          />
          {formik.touched.addressAr && formik.errors.addressAr ? (
            <div className='tx-danger'>{formik.errors.addressAr}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='addressEn' className='form-control-label active'>
            Address [EN] <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='addressEn'
            name='addressEn'
            {...formik.getFieldProps('addressEn')}
          />
          {formik.touched.addressEn && formik.errors.addressEn ? (
            <div className='tx-danger'>{formik.errors.addressEn}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='latitude' className='form-control-label active'>
            Latitude <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='latitude'
            required
            name='latitude'
            {...formik.getFieldProps('latitude')}
          />
          {formik.touched.latitude && formik.errors.latitude ? (
            <div className='tx-danger'>{formik.errors.latitude}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='longtitude' className='form-control-label active'>
            Longtitude <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='longtitude'
            name='longtitude'
            {...formik.getFieldProps('longtitude')}
          />
          {formik.touched.longtitude && formik.errors.longtitude ? (
            <div className='tx-danger'>{formik.errors.longtitude}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label
            htmlFor='searchKeywords1'
            className='form-control-label active'
          >
            Search Keywords 1 <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            id='searchKeywords1'
            required
            name='searchKeywords1'
            {...formik.getFieldProps('searchKeywords1')}
          />
          {formik.touched.searchKeywords1 && formik.errors.searchKeywords1 ? (
            <div className='tx-danger'>{formik.errors.searchKeywords1}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label
            htmlFor='searchKeywords2'
            className='form-control-label active'
          >
            Search Keywords 2 <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='searchKeywords2'
            name='searchKeywords2'
            {...formik.getFieldProps('searchKeywords2')}
          />
          {formik.touched.searchKeywords2 && formik.errors.searchKeywords2 ? (
            <div className='tx-danger'>{formik.errors.searchKeywords2}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='distance' className='form-control-label active'>
            Distance <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required
            id='distance'
            name='distance'
            {...formik.getFieldProps('distance')}
          />
          {formik.touched.distance && formik.errors.distance ? (
            <div className='tx-danger'>{formik.errors.distance}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
StepTwo.propTypes = {
  formik: PropTypes.object,
};