import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { IoMdLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { IoMenu } from 'react-icons/io5';
import { logout } from '../../../utils/logout';

export default function Navbar() {
  const dispatch = useDispatch();
  const { email, firstName, lastName } = useSelector((state) => state?.auth);

  return (
    <div className='page-header'>
      <nav className='navbar navbar-expand-lg d-flex justify-content-between align-items-center'>
        <ul className='list-inline list-unstyled mg-r-20'>
          <li className='list-inline-item align-text-top mt-2'>
            <a
              className='hidden-md hidden-lg'
              href='#'
              id='sidebar-toggle-button'
            >
              <IoMenu size={25} color='#666' />
            </a>
          </li>
          <li className='list-inline-item align-text-top mt-2'>
            <a
              className='hidden-xs hidden-sm'
              href='#'
              id='collapsed-sidebar-toggle-button'
            >
              <IoMenu size={23} color='#666' />
            </a>
          </li>
        </ul>
        <div className='header-right pull-right'>
          <ul className='list-inline justify-content-end'>
            <li className='list-inline-item dropdown'>
              <a
                href='#'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='select-profile'>
                  Hi, {firstName + ' ' + lastName}!
                </span>
                <Avatar name={firstName + ' ' + lastName} size='35' round />
              </a>
              <div className='dropdown-menu dropdown-menu-right dropdown-profile shadow-2'>
                <div className='user-profile-area'>
                  <div className='user-profile-heading'>
                    <div className='profile-thumbnail'>
                      <Avatar
                        name={firstName + ' ' + lastName}
                        size='35'
                        round
                      />
                    </div>
                    <div className='profile-text'>
                      <h6>{firstName + ' ' + lastName}</h6>
                      <span>{email}</span>
                    </div>
                  </div>
                  <Link to='/auth/profile' className='dropdown-item'>
                    <CgProfile /> My profile
                  </Link>
                  <Link
                    to='#'
                    className='dropdown-item'
                    onClick={() => dispatch(logout())}
                  >
                    <IoMdLogOut /> Sign-out
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
