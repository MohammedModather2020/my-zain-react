import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiHome } from 'react-icons/fi';

export default function Breadcrumb({ title, textActive, items = [] }) {
  return (
    <div className='pageheader pd-t-25 pd-b-35'>
      <div className='pd-t-5 pd-b-5'>
        <h1 className='pd-0 mg-0 tx-20 text-overflow'>{title}</h1>
      </div>
      <div className='breadcrumb pd-0 mg-0'>
        <Link className='breadcrumb-item' to='/'>
          <FiHome /> Home
        </Link>
        {items?.map((item) =>
          item?.url ? (
            <Link
              key={item?.name + Math.random()}
              className='breadcrumb-item'
              to={item?.url}
            >
              {item?.name}
            </Link>
          ) : (
            <span key={item?.name + Math.random()} className='breadcrumb-item'>
              {item?.name}
            </span>
          ),
        )}
        <span className='breadcrumb-item active'>{textActive}</span>
      </div>
    </div>
  );
}
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  textActive: PropTypes.string.isRequired,
  items: PropTypes.array,
};
