import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiHome } from 'react-icons/fi';

export default function Breadcrumb({ title, name }) {
  return (
    <div className='pageheader pd-t-25 pd-b-35'>
      <div className='pd-t-5 pd-b-5'>
        <h1 className='pd-0 mg-0 tx-20 text-overflow'>{title}</h1>
      </div>
      <div className='breadcrumb pd-0 mg-0'>
        <Link className='breadcrumb-item' to='/dashboard'>
          <FiHome /> Home
        </Link>
        <span className='breadcrumb-item active'>{name}</span>
      </div>
    </div>
  );
}
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
