import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminRoute = ({ isLogin, role }) => {
  return isLogin && role === 'admin' ? (
    <Layout />
  ) : (
    <Navigate to='/dashboard' />
  );
};

AdminRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default AdminRoute;
