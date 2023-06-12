import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import Loader from '../component/share/Loader';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [userLoaditng, userRole] = useUserRole();
    const location = useLocation();
    if (loading || userLoaditng) {
        return <Loader/>
    }
    if (user && userRole === 'instructor') {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;