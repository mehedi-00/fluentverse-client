import { Link, NavLink } from 'react-router-dom';

import {  FaUsersCog } from "react-icons/fa";

const Sidebar = () => {
    const isAdmin = true;
    const isInstructor = false;
    return (
        <div className="menu p-4 w-38 h-full bg-indigo-400 ">
            <Link to='/dashboard' className='text-3xl font-bold' >Fluent Verse</Link>

            <h4 className='border-b-2 border-gray-300 pb-4'>Dash Board</h4>
            <ul className='mt-8'>
                {
                    isAdmin && <>

                        <li className=''>
                            <NavLink to='/dashboard/admin-home' > Admin Home</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/manage-users' ><FaUsersCog/>  Manage Users</NavLink>
                        </li>
                    </>
                }
                {
                    isInstructor && <>

                        <li className=''>
                            <NavLink to='/dashboard/admin-home' > Instructore Home</NavLink>
                        </li>

                    </>
                }
            </ul>

        </div>
    );
};

export default Sidebar;