export default function Footer() {
  return (
    <footer className='page-footer text-center'>
      <div className='pd-t-5 pd-b-0 pd-x-20'>
        <div className='tx-10 tx-uppercase'>
          <p className='pd-y-10 mb-0'>
            Copyright &copy; {new Date().getFullYear()} | All rights reserved. |
            Created By{' '}
            <a href='https://www.sd.zain.com' target='_blank' rel='noreferrer'>
              E-Service Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
