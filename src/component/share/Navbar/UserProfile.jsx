import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import useUserRole from '../../../hooks/useUserRole';
const UserProfile = ({ img, logout,email }) => {

    const [userLoading, userRole] = useUserRole();
    if (userLoading) {
        return 'loading...';
    }

    return (
        <div>

            <Menu>
                <Menu.Button>
                    <img className='w-8 h-8 rounded-full object-cover' src={img} alt="" />
                </Menu.Button>
                <Menu.Items className='shadow-md shadow-slate-600 mt-4 absolute flex flex-col z-50  bg-white px-4 rounded-md w-[200px] py-4 right-4 md:right-10 '>
                   <p className='text-lg'>
                    {email}
                   </p>


                    {userLoading ? '' : <Link to={
                        userRole === 'admin' ? '/dashboard/manage-users' : userRole === 'instructor' ? '/dashboard/add-class' : '/dashboard/selected-class'
                    } className='myBtn px-3 py-2 '>
                        DashBoard
                    </Link>
                    }
                    <button className='myBtn  px-3 py-2 my-2' onClick={logout}>
                        Log Out
                    </button>


                </Menu.Items>
            </Menu>
        </div>
    );
};

export default UserProfile;