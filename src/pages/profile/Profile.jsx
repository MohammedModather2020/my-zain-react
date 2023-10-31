import { Fragment } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux';
import { IoIosArrowDown, IoIosRefresh } from 'react-icons/io';
import Avatar from 'react-avatar';

export default function Profile() {
  const { roles, firstName, lastName, username, email } = useSelector(
    (state) => state?.auth,
  );

  return (
    <Fragment>
      <Breadcrumb title='All Information' textActive='Profile' />
      <div className='row row-xs clearfix'>
        <div className='col-md-12 col-lg-12'>
          <div className='card mg-b-20 h-100'>
            <div className='card-header'>
              <h4 className='card-header-title'>All information details</h4>
              <div className='card-header-btn'>
                <a
                  href=''
                  data-toggle='collapse'
                  className='btn card-collapse'
                  data-target='#collapse1'
                  aria-expanded='true'
                >
                  <IoIosArrowDown />
                </a>
                <a href='' data-toggle='refresh' className='btn card-refresh'>
                  <IoIosRefresh />
                </a>
              </div>
            </div>
            <div className='card-body collapse show' id='collapse1'>
              <form className='form-layout form-layout-1'>
                <div className='row mg-b-25'>
                  <div className='col-12'>
                    <div className='image text-center mb-4 mt-2'>
                      <Avatar
                        name={firstName + ' ' + lastName}
                        size='100'
                        round={true}
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='firstName'
                        className='form-control-label active'
                      >
                        First Name
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        disabled
                        name='firstName'
                        value={firstName}
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='lastName'
                        className='form-control-label active'
                      >
                        Last Name
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        disabled
                        name='lastName'
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='email'
                        className='form-control-label active'
                      >
                        Email
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='email'
                        value={email}
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label
                        htmlFor='username'
                        className='form-control-label active'
                      >
                        Username
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='username'
                        value={username}
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <select
                        className='custom-select py-0'
                        defaultValue={roles[0]}
                      >
                        {roles &&
                          roles?.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
