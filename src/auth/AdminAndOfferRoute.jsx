import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AdminAndOfferRoute = ({ isLogin, roles }) => {
  return isLogin &&
    (roles?.includes('Admin') || roles?.includes('ProductOffering')) ? (
    <Layout />
  ) : (
    <Navigate to='/auth/login' />
  );
};

AdminAndOfferRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default AdminAndOfferRoute;
