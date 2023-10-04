import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const ShopRoute = ({ isLogin, roles }) => {
  return isLogin && roles.includes('Shop') ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

ShopRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default ShopRoute;
