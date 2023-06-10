import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: selectClass = [], refetch,isLoading:classLoading } = useQuery({
        queryKey: ['selectClass', user?.email],
        enabled: !!user?.email  ,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected-class?email=${user?.email}`);

            return res.data;
        }
    });
    return [selectClass,refetch,classLoading];
};

export default useSelectClass;