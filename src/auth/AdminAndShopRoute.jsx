import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminAndShopRoute = ({ isLogin, roles }) => {
  return isLogin && (roles?.includes('Admin') || roles?.includes('Shop')) ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

AdminAndShopRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default AdminAndShopRoute;
