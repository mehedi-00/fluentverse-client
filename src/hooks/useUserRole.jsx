import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
    
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRole, isLoading: userLoaditng } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/role/${user?.email}`);

            return res.data.role;
        }
    });
    return [userLoaditng, userRole];
};

export default useUserRole;