import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BiSolidOffer, BiUser } from 'react-icons/bi';
import { AiFillSliders } from 'react-icons/ai';
import { MdCalendarMonth, MdOutlineLocalOffer } from 'react-icons/md';
import useData from '../../hooks/useData';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function Statistics() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: statistics } = useData(accessToken, 'dashboard/statistics');

  return (
    <Fragment>
      <Breadcrumb title='All Statistics' textActive='Statistics' />
      <div className='row row-xs'>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label>Total Users</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary'>
                    <BiUser size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>{statistics?.usersTotal}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label>Offers Total</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-teal'>
                    <BiSolidOffer size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>{statistics?.offersTotal}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>Active Offers</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-success'>
                    <BiSolidOffer size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>
                        {statistics?.activeOffers}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>In Active Offers</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger'>
                    <BiSolidOffer size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>
                        {statistics?.inActiveOffers}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>
                    <small>Last Created Offers</small>
                  </label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary'>
                    <MdOutlineLocalOffer size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>
                        {statistics?.lastCreatedOffers}
                      </span>
                    </h2>
                    <div className='d-flex align-items-center tx-gray-500'>
                      <span className='text-primary mr-2 d-flex align-items-center'>
                        <MdCalendarMonth className='mr-1' />
                        Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>
                    <small>Last Modified Offers</small>
                  </label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary'>
                    <MdOutlineLocalOffer size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>
                        {statistics?.lastModifiedOffers}
                      </span>
                    </h2>
                    <div className='d-flex align-items-center tx-gray-500'>
                      <span className='text-primary mr-2 d-flex align-items-center'>
                        <MdCalendarMonth className='mr-1' />
                        Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>Subs Total</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-success'>
                    <AiFillSliders size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>{statistics?.subsTotal}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-xl-3'>
          <div className='card mg-b-20'>
            <div className='card-body pd-y-0'>
              <div className='custom-fieldset mb-4'>
                <div className='clearfix'>
                  <label className='tx-sm-10'>Un Subs Total</label>
                </div>
                <div className='d-flex align-items-center text-dark'>
                  <div className='wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger'>
                    <AiFillSliders size={25} />
                  </div>
                  <div>
                    <h2 className='tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark'>
                      <span className='counter'>{statistics?.unsubsTotal}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
