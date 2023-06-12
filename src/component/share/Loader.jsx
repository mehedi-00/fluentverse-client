import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='absolute  z-40 bg-slate-50 flex items-center justify-center  inset-0 '>
        <div >
        <GridLoader color="#4a6a59" />
        </div>
        </div>
    );
};

export default Loader;