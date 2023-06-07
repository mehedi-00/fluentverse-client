import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>
      loader ...
    </div>;
  }
  if (!user) {
    return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};

export default PrivetRoute;