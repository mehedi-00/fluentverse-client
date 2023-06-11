import { Link, NavLink } from 'react-router-dom';

import { FaUsersCog } from "react-icons/fa";
import useUserRole from '../../hooks/useUserRole';
import { FaHome } from "react-icons/fa";
const Sidebar = () => {
    
    const [, userRole] = useUserRole();
    return (
        <div className="menu p-4 w-38 h-full bg-indigo-400 ">
            <Link to='/dashboard' className='text-3xl font-bold' >Fluent Verse</Link>

            <h4 className='border-b-2 border-gray-300 pb-4'>Dash Board</h4>
            <ul className='mt-8'>
                {
                    userRole === 'admin' && <>

                        <li className=''>
                            <NavLink to='/dashboard/manage-classes' > Manage Classes</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/manage-users' ><FaUsersCog />  Manage Users</NavLink>
                        </li>
                    </>
                }
                {
                    userRole === 'instructor' && <>

                        <li className=''>
                            <NavLink to='/dashboard/my-classes' >My Classes </NavLink>
                        </li>
                        <li className=''>
                            <NavLink  to='/dashboard/add-class' > Add Class </NavLink>
                        </li>

                    </>
                }
                {
                    userRole === 'student' && <>

                        <li className=''>
                            <NavLink to='/dashboard/selected-class' > Selected Class</NavLink>
                        </li>

                    </>
                }
               

            </ul>
            <h4 className='border-b-2 border-gray-300 mt-12 pb-4'></h4>
            <ul className='mt-4'>
                <li>
                    <Link to='/'>
                    <FaHome/> Home
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;