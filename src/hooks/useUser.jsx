import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useUser = () => {
    const { user, loading } = useAuth();
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`);
           
            return res.data;
        }
    });
    return [refetch, allUser];
};

export default useUser;