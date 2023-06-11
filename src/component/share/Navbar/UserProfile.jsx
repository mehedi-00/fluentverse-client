import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import useUserRole from '../../../hooks/useUserRole';
const UserProfile = ({ img, logout }) => {

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
                <Menu.Items className='shadow-md shadow-slate-600 mt-4 absolute flex flex-col z-50  bg-white px-4 rounded-md w-[200px] py-4 right-10 '>
                    hello


                    {userLoading ? '' : <Link to={
                        userRole === 'admin' ? '/dashboard/manage-users' : userRole === 'instructor' ? '/dashboard/add-class' : '/dashboard/selected-class'
                    } className='btn btn-md bg-red-300 px-3 py-2 '>
                        DashBoard
                    </Link>
                    }
                    <button className='myBtn inline px-3 py-2 my-2 rounded-sm bg-orange-600' onClick={logout}>
                        Log Out
                    </button>


                </Menu.Items>
            </Menu>
        </div>
    );
};

export default UserProfile;