import Banner from '../../component/Home/Banner';
import PepoleSayes from '../../component/Home/PepoleSayes';
import PopularClasses from '../../component/Home/PopularClasses';
import TopInstructor from '../../component/Home/TopInstructor';
import Loader from '../../component/share/Loader';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
    const {loading} = useAuth()
    if(loading){
        return <Loader/>
    }
    return (
        <>
           <Banner/>
           <PopularClasses/>
           <TopInstructor/>
           <PepoleSayes/>
        </>
    );
};

export default Home;