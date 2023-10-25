import { Step } from '@haribhandari/react-step';
import Multiselect from 'multiselect-react-dropdown';

export default function StepOne({
  formik,
  users = [],
  onSelect,
  onRemove,
  setRoleSelected,
}) {
  return (
    <Step label='one'>
      <div className='row mg-b-25'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <label htmlFor='titleAr' className='form-control-label active'>
              Offer ID <span className='tx-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              id='titleAR'
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
            <label htmlFor='userId' className='form-control-label active'>
              Category <span className='tx-danger'>*</span>
            </label>
            <select
              className='custom-select py-0'
              value={formik.values.userId}
              {...formik.getFieldProps('userId')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option className='placeholder' selected disabled value=''>
                Please select user
              </option>

              {users &&
                users?.map((user) => (
                  <option key={user?.id} value={user?.id}>
                    {`${user.firstName}  ${user?.lastName}`}
                  </option>
                ))}
            </select>
            {formik.touched.userId && formik.errors.userId ? (
              <div className='tx-danger'>{formik.errors.userId}</div>
            ) : null}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <label htmlFor='userId' className='form-control-label active'>
              Package <span className='tx-danger'>*</span>
            </label>
            <select
              className='custom-select py-0'
              value={formik.values.userId}
              {...formik.getFieldProps('userId')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option className='placeholder' selected disabled value=''>
                Please select user
              </option>

              {users &&
                users?.map((user) => (
                  <option key={user?.id} value={user?.id}>
                    {`${user.firstName}  ${user?.lastName}`}
                  </option>
                ))}
            </select>
            {formik.touched.userId && formik.errors.userId ? (
              <div className='tx-danger'>{formik.errors.userId}</div>
            ) : null}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <label htmlFor='role' className='form-control-label'>
              Segments <span className='tx-danger'>*</span>
            </label>
            <Multiselect
              displayValue='name'
              className='p-0 '
              placeholder='Please select roles'
              required
              selectedValues={''}
              onSelect={(value) => onSelect(value, setRoleSelected)}
              onRemove={(value) => onRemove(value, setRoleSelected)}
              options={users}
            />
            {formik.touched.role && formik.errors.role ? (
              <div className='tx-danger'>{formik.errors.role}</div>
            ) : null}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <label htmlFor='titleAr' className='form-control-label active'>
              Title [AR] <span className='tx-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              id='titleAR'
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
