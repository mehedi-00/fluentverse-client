import { Outlet } from "react-router-dom";
import Sidebar from "../component/SideBar/Sidebar";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex flex-col  justify-center">


                    <Outlet/>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <Sidebar/>

            </div>
        </div>
    );
};

export default DashBoard;