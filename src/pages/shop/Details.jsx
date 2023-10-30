import { Fragment } from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function DetailsShop() {
  const { state } = useLocation();
  return (
    <Fragment>
      <Breadcrumb
        title={state?.titleEn}
        textActive='Details'
        items={[{ name: 'Shops', url: '/shops' }]}
      />
      <div className='card shadow mb-4 py-4 px-5 mx-5 text-dark'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>ID :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>{state?.id}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Name [AR] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.shopNameAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Name [EN] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.shopNameEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>City [AR] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>{state?.city}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>City [EN] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.cityEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>State [AR] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.state}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>State [EN] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.stateEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Address [AR] :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.addressAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-6'>
                <h3 className='tx-15 py-2'>Address [EN] :</h3>
              </div>
              <div className='col-md-6'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.addressEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Latitude :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.latitude}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Longtitude :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.longtitude}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Sattothu From :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.sattothuFrom}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Sattothu To :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.sattothuTo}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Fri From :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.friFrom}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Fri To :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.friTo}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-5'>
                <h3 className='tx-15 py-2'>Search Keywords 1 :</h3>
              </div>
              <div className='col-md-7'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.searchKeywords}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-5'>
                <h3 className='tx-15 py-2'>Search Keywords 2 :</h3>
              </div>
              <div className='col-md-7'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.searchKeywords}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Distance :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.distance}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Action :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.action}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-md-4'>
                <h3 className='tx-15 py-2'>Status :</h3>
              </div>
              <div className='col-md-8'>
                <h4 className='tx-14 font-weight-normal pt-1'>
                  {state?.status ? (
                    <span className='btn btn-sm btn-label-success'>ON</span>
                  ) : (
                    <span className='btn btn-sm btn-label-danger'>OFF</span>
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
