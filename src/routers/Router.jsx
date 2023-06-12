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
import SelectedClass from "../pages/DashBoard/SelectedClass";
import Payment from "../pages/DashBoard/Payment/Payment";
import EnrolledClass from "../pages/DashBoard/EnrolledClass";
import StudentRoute from "./StudentRoute";
import PaymnetHistory from "../pages/DashBoard/PaymnetHistory";
import Instructors from "../pages/Instructors/Instructors";



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
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <Classes />
            },
             {
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
        children: [
            // addmin route
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'manage-classes',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            // instructor route

            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },


            // student route
            {
                path: 'selected-class',
                element: <StudentRoute> <SelectedClass /></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute><Payment /></StudentRoute>
            },
            {
                path: 'enrolled-class',
                element: <StudentRoute> <EnrolledClass /></StudentRoute>
            },
            {
                path: 'payment-history',
                element: <StudentRoute><PaymnetHistory/></StudentRoute>
            }

        ]
    }
]);