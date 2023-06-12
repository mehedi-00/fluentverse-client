import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className='md:text-2xl font-extrabold'>
            Fluent <span className='text-primary'>Verse</span>
        </Link>
    );
};

export default Logo;