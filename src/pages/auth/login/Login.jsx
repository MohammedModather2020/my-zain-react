import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
  return (
    <>
      <div className='ht-100v d-flex'>
        <div className='card shadow-none pd-25 mx-auto wd-400 text-center bd-1 align-self-center'>
          <h4 className='card-title mt-3 text-center'>Sing In</h4>
          <p className='text-center'>Sing in to your account</p>
          <form>
            <div className='form-group input-group mt-5'>
              <div className='input-group-prepend'>
                <span className='input-group-text pd-x-16'>
                  <FaEnvelope />
                </span>
              </div>
              <input
                className='form-control form-control-md'
                placeholder='Email address'
                type='email'
              />
            </div>
            <div className='form-group input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text pd-x-16'>
                  <FaLock />
                </span>
              </div>
              <input
                className='form-control form-control-md'
                placeholder='Create password'
                type='password'
              />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-custom-primary btn-block tx-16 hover-white'
              >
                Login
              </button>
            </div>
            <p className='text-center'>
              Don&apos;t have an account?
              <Link className='text-primary' to='/auth/register'>
                {' '}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
