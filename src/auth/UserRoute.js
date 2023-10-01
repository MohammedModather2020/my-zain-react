import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const UserRoute = ({ isLogin, role }) => {
  return isLogin && role === 'user' ? <Layout /> : <Navigate to='/dashboard' />;
};

UserRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserRoute;
