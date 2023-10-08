import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export const Loading = ({ isLoading }) => {
  return createPortal(
    <div className={`loading-overlay ${isLoading ? 'd-block' : 'd-none'}`}>
      <div className='loader'></div>
    </div>,
    document.getElementById('overlay'),
  );
};
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
