import axios from "axios";
import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAllClass = () => {
    const { loading } = useAuth();
    const { data: allClasses = [],refetch } = useQuery({
        queryKey: ['allClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`https://fluent-verse-server.vercel.app/allclasses`);
            return res.data;
        }
    });
    return [allClasses,refetch]
};

export default useAllClass;