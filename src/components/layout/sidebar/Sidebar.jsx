import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiCategory, BiSolidOffer } from 'react-icons/bi';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { LiaShoppingBagSolid, LiaUsersCogSolid } from 'react-icons/lia';
import { AiOutlineApartment, AiOutlineShop } from 'react-icons/ai';
import { MdClose, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { PiAlignTopLight } from 'react-icons/pi';
import { GiUpgrade } from "react-icons/gi";
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
        <MdClose id='sidebar-toggle-button-close' />
      </div>
      <div className='page-sidebar-inner'>
        <div className='page-sidebar-menu'>
          <ul className='accordion-menu'>
            {roles?.includes('Admin') && (
              <Fragment>
                <li>
                  <a href='' tabIndex={1}>
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
              <a href='' tabIndex={2}>
                <BiCategory size={25} />
                <span>Categories</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/categories'>Categories</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='/categories/add'>Add Category</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='' tabIndex={3}>
                <LiaShoppingBagSolid size={25} />
                <span>Packages</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/packages'>Packages</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='/packages/Add'>Add Package</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='' tabIndex={3}>
                <AiOutlineApartment size={25} />
                <span>Segments</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/segments'>Segments</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='segments/add'>Add Segment</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='' tabIndex={4}>
                <BiSolidOffer size={25} />
                <span>Offers</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/offers'>Offers</Link>
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
              <a href='' tabIndex={5}>
                <AiOutlineShop size={25} />
                <span>Shops</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/shops'>Shops</Link>
                </li>
                {(roles?.includes('Admin') || roles.includes('Shop')) && (
                  <li>
                    <Link to='/shops/add'>Add Shop</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a href='' tabIndex={5}>
                <PiAlignTopLight size={25} />
                <span>VAS DSP</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/vas-dsp/top'>DSP Top</Link>
                </li>
                <li>
                  <Link to='/vas-dsp/products'>DSP Products</Link>
                </li>
                <li>
                  <Link to='/vas-dsp/categories'>DSP Categories</Link>
                </li>
                <li>
                  <Link to='/vas-dsp/categories/add'>Add DSP Categories</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href='' tabIndex={4}>
                <GiUpgrade size={25} />
                <span>Promotions</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <Link to='/promotions'>Promotions</Link>
                </li>
                {roles?.includes('Admin') && (
                  <li>
                    <Link to='/promotions/add'>Add Promotions</Link>
                  </li>
                )}
              </ul>
            </li>
            {roles?.includes('Admin') && (
              <Fragment>
                <li className='menu-divider mg-y-20-force'></li>
                <li className='mg-20-force menu-extras'>Authorization</li>
                <li>
                  <a href='' tabIndex={6}>
                    <MdOutlineAdminPanelSettings size={25} />
                    <span>Admins</span>
                    <i className='accordion-icon fa fa-angle-left'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/admins'>Admins</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='' tabIndex={7}>
                    <LiaUsersCogSolid size={25} />
                    <span>Roles</span>
                    <i className='accordion-icon fa fa-angle-left'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/roles'>Roles</Link>
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
