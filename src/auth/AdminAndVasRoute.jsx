import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminAndVasRoute = ({ isLogin, roles }) => {
  return isLogin &&
    (roles?.includes('Admin') || roles?.includes('VasBusiness')) ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

AdminAndVasRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default AdminAndVasRoute;
