import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const [axioSecure] = useAxiosSecure()
    const { user, loading } = useAuth();
    const { data: userRole, isLoading: userLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axioSecure.get(`/user/role/${user?.email}`);

            return res.data.role;
        }
    });
    return [userLoading, userRole];
};

export default useUserRole;