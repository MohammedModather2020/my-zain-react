import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const AllPrivateRoute = ({ isLogin }) => {
  return isLogin ? <Layout /> : <Navigate to='/auth/login' />;
};

AllPrivateRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default AllPrivateRoute;
