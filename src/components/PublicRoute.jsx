const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.token);
  const location = useLocation();

  return !isAuth ? (
    children
  ) : (
    <Navigate to={location.state ? location.state : '/'} />
  );
};

export default PublicRoute;
