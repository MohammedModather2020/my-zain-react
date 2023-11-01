import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiCategory, BiSolidOffer } from 'react-icons/bi';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { LiaShoppingBagSolid, LiaUsersCogSolid } from 'react-icons/lia';
import { AiOutlineApartment, AiOutlineShop } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { logout } from '../../../utils/logout';
import { Fragment } from 'react';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state?.auth);
  return (
    <div className='page-sidebar'>
      <div className='logo'>
        <Link className='logo-img' to='/'>
          <img
            className='desktop-logo'
            src='/assets/images/logo.jpg'
            alt='Logo'
          />
          <img
            style={{ filter: 'brightness(0.1) saturate(0%)' }}
            className='small-logo'
            src='/assets/images/small-logo.png'
            alt='Logo'
          />
        </Link>
        <i className='ion-ios-close-empty' id='sidebar-toggle-button-close'></i>
      </div>
      <div className='page-sidebar-inner'>
        <div className='page-sidebar-menu'>
          <ul className='accordion-menu'>
            {roles?.includes('Admin') && (
              <Fragment>
                <li>
                  <a href='#' tabIndex={1}>
                    <FiHome size={25} />
                    <span>Dashboard</span>
                    <i className='accordion-icon fa fa-angle-left'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/dashboard/statistics'>Statistics</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-divider mg-y-20-force'></li>
              </Fragment>
            )}
            <li className='mg-20-force menu-elements'>Elements</li>
            <li>
              <a href='#'>
                <BiCategory size={25} />
                <span>Categories</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/categories'>All Categories</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='/categories/add'>Add Category</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='#'>
                <LiaShoppingBagSolid size={25} />
                <span>Packages</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/packages'>All Packages</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='/packages/Add'>Add Package</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='#'>
                <AiOutlineApartment size={25} />
                <span>Segments</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/segments'>All Segments</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='segments/add'>Add Segment</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='#'>
                <BiSolidOffer size={25} />
                <span>Offers</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/offers'>All Offers</Link>
                </li>
                {(roles?.includes('Admin') ||
                  roles.includes('ProductOffering')) && (
                  <li>
                    <Link to='/offers/add'>Add Offer</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='#'>
                <AiOutlineShop size={25} />
                <span>Shops</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/shops'>All Shops</Link>
                </li>
                {(roles?.includes('Admin') || roles.includes('Shop')) && (
                  <li>
                    <Link to='/shops/add'>Add Shop</Link>
                  </li>
                )}
              </ul>
            </li>
            {roles?.includes('Admin') && (
              <Fragment>
                <li className='menu-divider mg-y-20-force'></li>
                <li className='mg-20-force menu-extras'>Authorization</li>
                <li>
                  <a href='#'>
                    <MdOutlineAdminPanelSettings size={25} />
                    <span>Admins</span>
                    <i className='accordion-icon fa fa-angle-left'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/admins'>All Admins</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>
                    <LiaUsersCogSolid size={25} />
                    <span>Roles</span>
                    <i className='accordion-icon fa fa-angle-left'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/roles'>All Roles</Link>
                      <Link to='/roles/add'>Add Role</Link>
                      <Link to='/roles/sign'>Sign Role</Link>
                    </li>
                  </ul>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className='sidebar-footer justify-content-between d-flex'>
        <Link
          className='pull-left'
          to='/auth/profile'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Profile'
        >
          <CgProfile className='ht-15' />
        </Link>
        <Link
          onClick={() => dispatch(logout())}
          className='pull-left'
          to='#'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Sing Out'
        >
          <FiLogOut className='ht-15' />
        </Link>
      </div>
    </div>
  );
}
