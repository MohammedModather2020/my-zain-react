import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminRoute = ({ isLogin, roles }) => {
  return isLogin && roles?.includes('Admin') ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

AdminRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default AdminRoute;
