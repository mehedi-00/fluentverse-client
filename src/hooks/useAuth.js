import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvaider";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};