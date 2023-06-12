import { Link, NavLink } from 'react-router-dom';

import { FaUsersCog } from "react-icons/fa";
import useUserRole from '../../hooks/useUserRole';
import { FaHome } from "react-icons/fa";
import Logo from '../share/Logo';
import { HiTableCells } from "react-icons/hi2";
const Sidebar = () => {
    
    const [, userRole] = useUserRole();
    return (
        <div className="menu p-4 w-38 h-full bg-white ">
            <Logo/>

            <h4 className='border-b-2 border-gray-300 pb-4 font-bold text-2xl my-5 text-center '>Dash Board</h4>
            <ul className='mt-8 '>
                {
                    userRole === 'admin' && <>

                        <li className=''>
                            <NavLink to='/dashboard/manage-classes'  className={({ isActive }) => (isActive ? "navActive" : "default")}><HiTableCells /> Manage Classes</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/manage-users'  className={({ isActive }) => (isActive ? "navActive" : "default")}><FaUsersCog />  Manage Users</NavLink>
                        </li>
                    </>
                }
                {
                    userRole === 'instructor' && <>

                        <li className=''>
                            <NavLink to='/dashboard/my-classes'  className={({ isActive }) => (isActive ? "navActive" : "default")}>My Classes </NavLink>
                        </li>
                        <li className=''>
                            <NavLink  to='/dashboard/add-class'  className={({ isActive }) => (isActive ? "navActive" : "default")}> Add Class </NavLink>
                        </li>

                    </>
                }
                {
                    userRole === 'student' && <>

                        <li className=''>
                            <NavLink to='/dashboard/selected-class'  className={({ isActive }) => (isActive ? "navActive" : "default")}> Selected Class</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/enrolled-class'  className={({ isActive }) => (isActive ? "navActive" : "default")}> Enrolled Class</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/payment-history'  className={({ isActive }) => (isActive ? "navActive" : "default")}> Payment History</NavLink>
                        </li>

                    </>
                }
               

            </ul>
            <h4 className='border-b-2 border-gray-300 mt-12 pb-4'></h4>
            <ul className='mt-4'>
                <li>
                    <Link to='/' className='default'>
                    <FaHome/> Home
                    </Link>
                </li>
                <li>
                    <Link to='/' className='default'>
                    Classes
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;