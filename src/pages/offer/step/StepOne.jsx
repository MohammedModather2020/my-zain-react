import PropTypes from 'prop-types';
import Multiselect from 'multiselect-react-dropdown';
import useData from '../../../hooks/useData';
import { requiredFiledByRole } from '../../../utils/requiredFiledByRole';
import { disabledFiledByRole } from '../../../utils/disabledFiledByRole';

export default function StepOne({
  accessToken,
  formik,
  onSelect,
  onRemove,
  setSegmentsSelected,
  segmentsInOffer,
  roles,
}) {
  const { data: categories } = useData(
    accessToken,
    'category/getAllCategories',
  );
  const { data: packages } = useData(accessToken, 'package/getAllPackages');
  const { data: segments } = useData(accessToken, '/segment/getAllSegments');

  return (
    <div className='row mg-b-25'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='offerId' className='form-control-label active'>
            Offer ID <span className='tx-danger'>*</span>
          </label>
          <input
            className='form-control'
            type='text'
            required={requiredFiledByRole(roles, 'ProductOffering')}
            disabled={disabledFiledByRole(roles, 'ProductOffering')}
            id='offerId'
            name='offerId'
            {...formik.getFieldProps('offerId')}
          />
          {formik.touched.offerId && formik.errors.offerId ? (
            <div className='tx-danger'>{formik.errors.offerId}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label
            htmlFor='offerCategoryId'
            className='form-control-label active'
          >
            Category <span className='tx-danger'>*</span>
          </label>
          <select
            className='custom-select py-0'
            required
            value={formik.values.offerCategoryId}
            {...formik.getFieldProps('offerCategoryId')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option className='placeholder' selected disabled value=''>
              Please select category
            </option>
            {categories &&
              categories?.map((category) => (
                <option key={category?.id} value={category?.id}>
                  {category.titleEn}
                </option>
              ))}
          </select>
          {formik.touched.offerCategoryId && formik.errors.offerCategoryId ? (
            <div className='tx-danger'>{formik.errors.offerCategoryId}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='offerPackageId' className='form-control-label active'>
            Package <span className='tx-danger'>*</span>
          </label>
          <select
            className='custom-select py-0'
            required
            value={formik.values.offerPackageId}
            {...formik.getFieldProps('offerPackageId')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option className='placeholder' selected disabled value=''>
              Please select package
            </option>

            {packages &&
              packages?.map((item) => (
                <option key={item?.id} value={item?.id}>
                  {item.titleEn}
                </option>
              ))}
          </select>
          {formik.touched.offerPackageId && formik.errors.offerPackageId ? (
            <div className='tx-danger'>{formik.errors.offerPackageId}</div>
          ) : null}
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='form-group'>
          <label htmlFor='segmentIds' className='form-control-label'>
            Segments <span className='tx-danger'>*</span>
          </label>
          <Multiselect
            displayValue='titleEn'
            isObject={true}
            id='segmentIds'
            className='p-0 '
            placeholder='Please select segments'
            {...formik.getFieldProps('segmentIds')}
            required
            selectedValues={segmentsInOffer}
            onKeyPressFn={(value) => onSelect(value, setSegmentsSelected)}
            onSelect={(value) => onSelect(value, setSegmentsSelected)}
            onRemove={(value) => onRemove(value, setSegmentsSelected)}
            options={segments}
          />
          {formik.touched.segmentIds && formik.errors.segmentIds ? (
            <div className='tx-danger'>{formik.errors.segmentIds}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

StepOne.propTypes = {
  formik: PropTypes.object,
  roles: PropTypes.array,
  segmentsInOffer: PropTypes.array,
  accessToken: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  setSegmentsSelected: PropTypes.func,
};
