import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user.email}`);

            return res.data;
        }
    });
    return [refetch, allUser];
};

export default useUser;