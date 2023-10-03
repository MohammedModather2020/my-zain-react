import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const UserRoute = ({ isLogin, roles }) => {
  return isLogin && roles.includes('User') ? (
    <Layout />
  ) : (
    <Navigate to='/dashboard' />
  );
};

UserRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  roles: PropTypes.array.isRequired,
};

export default UserRoute;
