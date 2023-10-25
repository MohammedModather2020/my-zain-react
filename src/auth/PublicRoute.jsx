import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ isLogin }) => {
  return isLogin ? <Navigate to='/dashboard/statistics' /> : <Outlet />;
};

PublicRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
export default PublicRoute;
