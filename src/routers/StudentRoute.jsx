import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

const StudentRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [userLoaditng, userRole] = useUserRole();
    const location = useLocation();
    if (loading || userLoaditng) {
        return <div>loading...</div>;
    }
    if (user && userRole === 'student') {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;