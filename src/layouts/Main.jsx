import Footer from "../component/share/Footer";
import Navbar from "../component/share/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="font-josefin">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;