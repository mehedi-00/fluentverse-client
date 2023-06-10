import { Menu, Switch } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUserRole from '../../../hooks/useUserRole';
const UserProfile = ({ img, logout }) => {
    const [enabled, setEnabled] = useState(false);

    const [userLoading, userRole] = useUserRole();
    if(userLoading){
        return 'loading...'
    }

    return (
        <div>

            <Menu>
                <Menu.Button>
                    <img className='w-8 h-8 rounded-full object-cover' src={img} alt="" />
                </Menu.Button>
                <Menu.Items className='shadow-md shadow-slate-600 mt-4 absolute flex flex-col z-50  bg-white px-4 rounded-md w-[200px] py-4 right-10 '>
                    hello


                 {userLoading? '':  <Link to={
                        userRole === 'admin' ? '/dashboard/manage-users' : userRole === 'instructor'? '/dashboard/add-class': '/dashboard/selected-class'
                    } className='btn btn-md bg-red-300 px-3 py-2'>
                        DashBoard
                    </Link>
}
                    <button className='myBtn inline px-3 py-2 my-2 rounded-sm bg-orange-600' onClick={logout}>
                        Log Out
                    </button>

                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-[#ef9273]' : 'bg-indigo-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? 'translate-x-6 bg-black' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-black transition`}
                        />
                    </Switch>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default UserProfile;