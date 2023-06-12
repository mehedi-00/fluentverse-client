import { Outlet } from "react-router-dom";
import Sidebar from "../component/SideBar/Sidebar";


import { BiAlignLeft } from "react-icons/bi";
const DashBoard = () => {
    return (


        <>
            <div className="drawer drawer-mobile lg:drawer-open ">
                
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content    justify-center">
                <label htmlFor="my-drawer-2" className=' drawer-button lg:hidden'>
                    <BiAlignLeft className="w-6 h-6 text-primary mt-5 ms-5"/>
                </label>

                    <Outlet />



                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <Sidebar />

                </div>
            </div>
        </>
    );
};

export default DashBoard;
