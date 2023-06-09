import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
    
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRole, isLoading: userLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/role/${user?.email}`);

            return res.data.role;
        }
    });
    return [userLoading, userRole];
};

export default useUserRole;