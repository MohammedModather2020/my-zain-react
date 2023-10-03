import PropTypes from 'prop-types';

export const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-overlay ${isLoading ? 'd-block' : 'd-none'}`}>
      <div className='loader'></div>
    </div>
  );
};
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
