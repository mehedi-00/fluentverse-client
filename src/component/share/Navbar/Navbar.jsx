import Container from '../Container';
import Logo from '../Logo';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { BiAlignLeft } from "react-icons/bi";
import { useAuth } from '../../../hooks/useAuth';
const Navbar = () => {
    const {user,logOut} = useAuth();
    const menuItem = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/'>Instructors</Link> </li>
        <li> <Link to='/'>Classes</Link> </li>
    </>;

    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Menu>
                        <Menu.Button className='lg:hidden w-8 h-8'>
                            <BiAlignLeft />
                        </Menu.Button>
                        <Menu.Items className='shadow-md shadow-slate-600 list-none absolute flex flex-col bg-white px-2 w-[200px] py-4 top-12 left-10'>
                            {
                                menuItem
                            }
                        </Menu.Items>
                    </Menu>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <UserProfile img={user?.photoURL} logOut={logOut}/>:
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Navbar;