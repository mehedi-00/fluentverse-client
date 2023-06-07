import axios from 'axios';

// add user 
export const addUser = (name, email, photoUrl) => {
    return axios.post(`${import.meta.env.VITE_SERVER_URL}/users`, { name, email, photoUrl, role: 'student' });
};

