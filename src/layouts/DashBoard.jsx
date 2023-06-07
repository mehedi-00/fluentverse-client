import Sidebar from "../component/SideBar/Sidebar";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open flex flex-row-reverse">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content md:w-9/12 flex flex-col items-center justify-center">
              
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side md:w-3/12">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <Sidebar/>

            </div>
        </div>
    );
};

export default DashBoard;