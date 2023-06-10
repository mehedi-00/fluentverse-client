import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../layouts/DashBoard";
import ManageUsers from "../pages/DashBoard/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../pages/DashBoard/AddClass";
import MyClasses from "../pages/DashBoard/MyClasses";
import ManageClasses from "../pages/DashBoard/ManageClasses";
import Classes from "../pages/Classes/Classes";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes/>
            }, {
                path: 'login',
                element: <Login />
            }, {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><DashBoard /></PrivetRoute>,
        children:[
            // addmin route
            {
                path: '/dashboard/manage-users',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path: '/dashboard/manage-classes',
                element: <AdminRoute><ManageClasses/></AdminRoute>
            },
            // instructor route

            {
                path: '/dashboard/my-classes',
                element: <InstructorRoute><MyClasses/></InstructorRoute>
            },
            {
                path: '/dashboard/add-class',
                element: <InstructorRoute><AddClass/></InstructorRoute>
            }


            // student route
        ]
    }
]);