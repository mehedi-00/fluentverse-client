import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useUserRole = () => {
    const { user } = useAuth();
    const { data: userRole, isLoading: userLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled:!!user?.email ,
        queryFn: async () => {
            const res = await axios.get(`https://fluent-verse-server.vercel.app/user/role/${user?.email}`);
            return res.data?.role || 'student';

        }
    });
    return [userLoading, userRole];
};

export default useUserRole;