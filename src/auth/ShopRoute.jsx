import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const ShopRoute = ({ isLogin, role }) => {
  return isLogin && role === 'shop' ? <Layout /> : <Navigate to='/dashboard' />;
};

ShopRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default ShopRoute;
