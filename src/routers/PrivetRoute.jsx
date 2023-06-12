import Loader from "../component/share/Loader";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader/>
  }
  if (!user) {
    return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};

export default PrivetRoute;