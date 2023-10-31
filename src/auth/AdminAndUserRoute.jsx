import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminAndUserRoute = ({ isLogin, roles }) => {
  return isLogin && (roles?.includes('Admin') || roles?.includes('User')) ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

AdminAndUserRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default AdminAndUserRoute;
