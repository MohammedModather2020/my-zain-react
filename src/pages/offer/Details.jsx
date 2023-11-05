import moment from 'moment';
import { Fragment } from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function DetailsOffer() {
  const { state } = useLocation();
  return (
    <Fragment>
      <Breadcrumb
        title={state?.titleEn}
        textActive='Details'
        items={[{ name: 'Offers', url: '/offers' }]}
      />
      <div className='card shadow mb-4 py-4 px-5 mx-md-5 text-dark'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>{state?.id}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Offer ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerId}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [AR] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.titleAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [EN] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.titleEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Modified By :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.modifiedBy}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Is Active :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-14 font-weight-normal pt-1'>
                  {state?.active ? (
                    <span className='btn btn-sm btn-label-success'>True</span>
                  ) : (
                    <span className='btn btn-sm btn-label-danger'>False</span>
                  )}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Tariff :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.tariff}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Keyword :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.keyword}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>New Tariff :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.newTariff}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-6'>
                <h3 className='tx-15 py-2'>New Tariff Active Date :</h3>
              </div>
              <div className='col-6'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.newTariffActiveDate}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Subs :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>{state?.subs}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>UnSubs :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.unsubs}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Tag ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.tagId}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Uc ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>{state?.ucId}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Offer Channel :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerChannel}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-12 mt-2 text-center'>
            <h3 className='tx-center tx-medium tx-20 bg-primary text-white d-inline-block px-4 py-2 rounded-5 mb-0'>
              Offer Category
            </h3>
          </div>
          <div className='col-md-6'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerCategory?.id}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Last Update :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerCategory?.lastUpdate
                    ? moment(state?.offerCategory?.lastUpdate).format('LLL')
                    : '-------------'}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [AR] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerCategory?.titleAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [EN] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerCategory?.titleEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-12 mt-2 text-center'>
            <h3 className='tx-center tx-medium tx-20 bg-primary text-white d-inline-block px-4 py-2 rounded-5 mb-0'>
              Offer Package
            </h3>
          </div>
          <div className='col-md-6'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>ID :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerPackage?.id}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Last Update :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerPackage?.lastUpdate ? moment(state?.offerPackage?.lastUpdate).format('LLL') :'-------------'}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [AR] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerPackage?.titleAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Title [EN] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.offerPackage?.titleEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-4'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Description [AR] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.descAr}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-4'>
            <div className='row border'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'> Description [EN] :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.descEn}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Created At :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.createdAt
                    ? moment(state?.createdAt).format('LLL')
                    : '-------------'}
                </h4>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row border-bottom border-right border-left'>
              <div className='col-4'>
                <h3 className='tx-15 py-2'>Last Updated :</h3>
              </div>
              <div className='col-8'>
                <h4 className='tx-15 font-weight-normal py-2'>
                  {state?.lastUpdated
                    ? moment(state?.lastUpdated).format('LLL')
                    : '-------------'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
