import Banner from '../../component/Home/Banner';
import PepoleSayes from '../../component/Home/PepoleSayes';
import PopularClasses from '../../component/Home/PopularClasses';
import TopInstructor from '../../component/Home/TopInstructor';

const Home = () => {
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