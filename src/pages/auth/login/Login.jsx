import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';

export default function Login() {
  return (
    <>
      <div className='ht-100v d-flex'>
        <div className='card shadow-2 border-0 pd-25 mx-auto wd-400 text-center bd-1 align-self-center'>
          <h4 className='card-title mt-3 text-center'>Sing In</h4>
          <p className='text-center'>Sing in to your account</p>
          <form>
            <div className='text-left mt-3'>
              <label htmlFor='password'>Username</label>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <BiSolidUser />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-gray'
                  name='username'
                  id='username'
                  type='text'
                />
              </div>
            </div>
            <div className='text-left'>
              <label htmlFor='password'>Password</label>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text pd-x-16'>
                    <FaLock />
                  </span>
                </div>
                <input
                  className='form-control form-control-md border-gray'
                  name='password'
                  id='password'
                  type='password'
                />
              </div>
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-lg btn-custom-primary btn-block tx-16 hover-white'
              >
                Login
              </button>
            </div>
            <p className='text-center'>
              Don&apos;t have an account ?
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
