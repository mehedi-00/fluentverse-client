import { Link, NavLink } from 'react-router-dom';

import { FaUsersCog } from "react-icons/fa";
import useUserRole from '../../hooks/useUserRole';

const Sidebar = () => {
    
    const [userLoaditng, userRole] = useUserRole();
    console.log(userRole)
    return (
        <div className="menu p-4 w-38 h-full bg-indigo-400 ">
            <Link to='/dashboard' className='text-3xl font-bold' >Fluent Verse</Link>

            <h4 className='border-b-2 border-gray-300 pb-4'>Dash Board</h4>
            <ul className='mt-8'>
                {
                    userRole === 'admin' && <>

                        <li className=''>
                            <NavLink to='/dashboard/admin-home' > Admin Home</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/dashboard/manage-users' ><FaUsersCog />  Manage Users</NavLink>
                        </li>
                    </>
                }
                {
                    userRole === 'instructor' && <>

                        <li className=''>
                            <NavLink to='/dashboard/instructor-home' > Instructore Home</NavLink>
                        </li>

                    </>
                }
                {
                    userRole === 'student' && <>

                        <li className=''>
                            <NavLink to='/dashboard/student-home' > Student Home</NavLink>
                        </li>

                    </>
                }
            </ul>

        </div>
    );
};

export default Sidebar;