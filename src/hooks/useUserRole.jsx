import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useUserRole = () => {
    const { user } = useAuth();
    const { data: userRole, isLoading: userLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/role/${user?.email}`);
            console.log(res);
            return res.data?.role || 'student';
        }
    });
    return [userLoading, userRole];
};

export default useUserRole;