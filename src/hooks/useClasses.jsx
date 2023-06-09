import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useUserRole  from "./useUserRole";



const useClasses = () => {
    const { loading,user } = useAuth();
    const [userLoading] = useUserRole();
    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [], refetch,isLoading:classLoading } = useQuery({
        queryKey: ['allClasses', user?.email],
        enabled: !loading && !userLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?email=${user.email}`);

            return res.data;
        }
    });
    return [refetch, allClasses,classLoading];
};

export default useClasses;