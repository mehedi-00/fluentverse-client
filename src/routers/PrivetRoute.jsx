import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return 'loader ...';
  }
  if (!user) {
    return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};

export default PrivetRoute;