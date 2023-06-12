import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import Loader from '../component/share/Loader';

const StudentRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [userLoaditng, userRole] = useUserRole();
    const location = useLocation();
    if (loading || userLoaditng) {
        return <Loader/>
    }
    if (user && userRole === 'student') {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;